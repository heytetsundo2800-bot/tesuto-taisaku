// 記録の同期API。Vercel に Upstash Redis（KV）をつなぐと動く。未設定なら 503 を返し、アプリは端末の中だけで動く。
const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

async function redis(cmd) {
  const r = await fetch(URL_, { method: "POST", headers: { Authorization: "Bearer " + TOKEN, "content-type": "application/json" }, body: JSON.stringify(cmd) });
  if (!r.ok) throw new Error("redis " + r.status);
  return (await r.json()).result;
}

module.exports = async (req, res) => {
  res.setHeader("cache-control", "no-store");
  if (!URL_ || !TOKEN) return res.status(503).json({ error: "sync not configured" });
  try {
    if (req.method === "GET") {
      const code = String(req.query.code || "");
      if (!/^[a-z0-9]{8,32}$/.test(code)) return res.status(400).json({ error: "bad code" });
      const v = await redis(["GET", "tt:" + code]);
      return res.status(200).json(v ? JSON.parse(v) : { prog: {}, attempts: [] });
    }
    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
      const code = String(body.code || "");
      if (!/^[a-z0-9]{8,32}$/.test(code)) return res.status(400).json({ error: "bad code" });
      const data = body.data || {};
      const s = JSON.stringify({ prog: data.prog || {}, attempts: (data.attempts || []).slice(-500) });
      if (s.length > 300000) return res.status(413).json({ error: "too large" });
      // サーバー側でもマージする（2台で同時に使っても消えないように）
      const cur = await redis(["GET", "tt:" + code]);
      let merged = JSON.parse(s);
      if (cur) {
        const a = JSON.parse(cur);
        const prog = Object.assign({}, a.prog || {});
        for (const [id, v] of Object.entries(merged.prog)) if (!prog[id] || String(v.at) > String(prog[id].at)) prog[id] = v;
        const seen = new Set(); const attempts = [];
        for (const x of [...(a.attempts || []), ...merged.attempts]) if (x && !seen.has(x.id)) { seen.add(x.id); attempts.push(x); }
        merged = { prog, attempts: attempts.slice(-500) };
      }
      await redis(["SET", "tt:" + code, JSON.stringify(merged)]);
      return res.status(200).json({ ok: true });
    }
    res.setHeader("allow", "GET, POST");
    return res.status(405).end();
  } catch (e) {
    return res.status(500).json({ error: "sync failed" });
  }
};
