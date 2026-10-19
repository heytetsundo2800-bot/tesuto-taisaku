"use strict";
// ===== データと記録 =====
const DATA = window.TT_DATA || { subjects: [], cards: [] };
const KEY = "tt_state_v1";
const WD = "日月火水木金土";

function loadState() {
  try { const s = JSON.parse(localStorage.getItem(KEY) || "null"); if (s && s.prog) return s; } catch (e) {}
  return { prog: {}, attempts: [], code: null, synced: null };
}
let S = loadState();
if (!S.code) { S.code = newCode(); saveLocal(); }
function saveLocal() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
function newCode() {
  const a = "abcdefghjkmnpqrstuvwxyz23456789"; let s = "";
  const r = new Uint32Array(10); (self.crypto || window.crypto).getRandomValues(r);
  for (const x of r) s += a[x % a.length];
  return s;
}

// ===== クラウド同期（Vercel の /api/sync。未設定なら端末の中だけで動く） =====
let syncState = "未確認"; let syncTimer = null;
function merge(a, b) {
  const prog = Object.assign({}, a.prog);
  for (const [id, v] of Object.entries(b.prog || {})) {
    if (!prog[id] || String(v.at) > String(prog[id].at)) prog[id] = v;
  }
  const seen = new Set(); const attempts = [];
  for (const x of [...(a.attempts || []), ...(b.attempts || [])]) { if (x && !seen.has(x.id)) { seen.add(x.id); attempts.push(x); } }
  return { prog, attempts };
}
async function pull() {
  try {
    const r = await fetch("/api/sync?code=" + encodeURIComponent(S.code), { cache: "no-store" });
    if (r.status === 503) { syncState = "オフ（未設定）"; return; }
    if (!r.ok) { syncState = "失敗"; return; }
    const remote = await r.json();
    const m = merge(S, remote || {});
    S.prog = m.prog; S.attempts = m.attempts; S.synced = new Date().toISOString(); saveLocal();
    syncState = "OK"; render();
  } catch (e) { syncState = "オフライン"; }
}
function push() {
  clearTimeout(syncTimer);
  syncTimer = setTimeout(async () => {
    try {
      const r = await fetch("/api/sync", { method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ code: S.code, data: { prog: S.prog, attempts: S.attempts } }) });
      if (r.status === 503) { syncState = "オフ（未設定）"; return; }
      syncState = r.ok ? "OK" : "失敗"; if (r.ok) { S.synced = new Date().toISOString(); saveLocal(); }
    } catch (e) { syncState = "オフライン"; }
  }, 1500);
}

// ===== 小道具 =====
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>");
const plain = s => String(s ?? "").replace(/\*\*/g, "");
function todayJST() { return new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 10); }
function daysUntil(date) { return Math.round((Date.parse(date + "T00:00:00Z") - Date.parse(todayJST() + "T00:00:00Z")) / 864e5); }
function md(date) { const d = new Date(date + "T00:00:00Z"); return (d.getUTCMonth() + 1) + "/" + d.getUTCDate() + "（" + WD[d.getUTCDay()] + "）"; }
function nextTest(sub) { return (sub.tests || []).filter(t => daysUntil(t.date) >= 0).sort((a, b) => a.date.localeCompare(b.date))[0] || null; }
function testsOf(c) { return c.tests || (c.test ? [c.test] : []); }
function cardsFor(sid, tid) { return DATA.cards.filter(c => c.sid === sid && (!tid || testsOf(c).includes(tid))).sort((a, b) => (a.ord || 0) - (b.ord || 0)); }
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function stat(cs) { let ok = 0, ng = 0; cs.forEach(c => { const r = S.prog[c.id]?.r; if (r === "ok") ok++; else if (r === "ng") ng++; }); return { ok, ng, new: cs.length - ok - ng, total: cs.length }; }
function toast(t) { const d = document.createElement("div"); d.className = "toast"; d.textContent = t; document.body.appendChild(d); setTimeout(() => d.remove(), 1800); }

// 読み上げ
function speak(t, slow) { try { const u = new SpeechSynthesisUtterance(t); u.lang = "en-US"; u.rate = slow ? 0.6 : 0.9; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) {} }
function sayBtns(c) { return c.say ? '<div class="say"><button class="sbtn" data-say="1">▶ 聞く</button><button class="sbtn" data-say="2">ゆっくり</button></div>' : ""; }
function bindSay(c) { $app.querySelectorAll("[data-say]").forEach(b => b.onclick = e => { e.stopPropagation(); speak(c.say, b.dataset.say === "2"); }); }

// スペル判定：大文字・小文字も記号も、そのまま比べる（空白とアポストロフィの形だけそろえる）
const tidy = t => String(t || "").replace(/[‘’ʼ]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").trim();
function judge(typed, answer) {
  const a = tidy(answer), b = tidy(typed);
  if (!b) return null;
  if (a === b) return { ok: true, msg: "○ 完璧（大文字・小文字・記号も合ってる）" };
  if (a.toLowerCase() === b.toLowerCase()) return { ok: false, msg: "△ 大文字・小文字がちがう" };
  const np = t => t.replace(/[.,?!;:"]/g, "").replace(/\s+/g, " ").trim();
  if (np(a) === np(b)) return { ok: false, msg: "△ 記号（. , ? など）がちがう" };
  if (np(a).toLowerCase() === np(b).toLowerCase()) return { ok: false, msg: "△ 大文字・小文字と記号がちがう" };
  return { ok: false, msg: "× ちがう" };
}

// 今日やる分：テストまでの日数から決める（まだ → ★の未挑戦 → 未挑戦 → 前にわかったもの）
function todayMenu(sid, test) {
  const cs = cardsFor(sid, test?.id);
  const d = test ? daysUntil(test.date) : 3, left = Math.max(1, d);
  const ng = cs.filter(c => S.prog[c.id]?.r === "ng");
  const newStar = cs.filter(c => !S.prog[c.id] && c.star), newOther = cs.filter(c => !S.prog[c.id] && !c.star);
  const okOld = cs.filter(c => S.prog[c.id]?.r === "ok").sort((a, b) => String(S.prog[a.id].at).localeCompare(String(S.prog[b.id].at)));
  const notOk = ng.length + newStar.length + newOther.length;
  let target = d === 0 ? 20 : Math.ceil(notOk / left);
  target = Math.min(20, Math.max(8, target));
  return [...shuffle(ng), ...newStar, ...newOther, ...okOld].slice(0, Math.min(target, cs.length));
}

// ===== 画面 =====
const $app = document.getElementById("app");
let V = { name: "home" };
function go(v) { V = v; render(); window.scrollTo(0, 0); }
function head(title, back) { return '<div class="top">' + (back ? '<button class="back" id="bk">← 戻る</button>' : "") + "<h1>" + esc(title) + "</h1>" + (V.name === "home" ? '<button class="gear" id="gear">同期</button>' : "") + "</div>"; }
function bindBack(fn) { const b = document.getElementById("bk"); if (b) b.onclick = fn; }
function render() {
  if (V.name === "home") return renderHome();
  if (V.name === "subject") return renderSubject();
  if (V.name === "study") return renderStudy();
  if (V.name === "mock") return renderMock();
  if (V.name === "sync") return renderSync();
}

function renderHome() {
  let h = head("テスト対策");
  const subs = DATA.subjects.slice().sort((a, b) => { const ta = nextTest(a), tb = nextTest(b); return (ta ? ta.date : "9") < (tb ? tb.date : "9") ? -1 : 1; });
  if (!subs.length) h += '<div class="panel empty">まだ科目がありません。</div>';
  else h += '<div class="sub">テストが近い順</div>';
  subs.forEach(s => {
    const t = nextTest(s), cs = cardsFor(s.id, t?.id), st = stat(cs), d = t ? daysUntil(t.date) : null;
    h += '<button class="subj" data-sid="' + esc(s.id) + '"><b>' + esc(s.name) + "</b>" +
      '<span class="days' + (d !== null && d <= 2 ? " hot" : "") + '">' + (t ? "<small>あと</small><strong>" + (d === 0 ? "今日" : d) + "</strong><small>" + (d === 0 ? "" : "日") + "</small>" : "<small>予定なし</small>") + "</span>" +
      '<span class="sub">' + (t ? esc(md(t.date) + " " + t.label) : "テスト日未定") + " ・ 覚えた " + st.ok + "/" + st.total + "</span></button>";
  });
  h += '<div class="note"><b>使い方</b><ul><li>科目を選んで「今日の10分」を押すだけ。今日やる分は、テストまでの日数から自動で決まります</li><li>思い出せなければ、すぐ「まだ」でOK。「まだ」のカードは少しあとにもう一度出ます</li><li>ホーム画面に追加すると、アプリとして使えます</li></ul></div>';
  $app.innerHTML = h;
  $app.querySelectorAll(".subj").forEach(b => b.onclick = () => go({ name: "subject", sid: b.dataset.sid }));
  document.getElementById("gear").onclick = () => go({ name: "sync" });
}

function renderSubject() {
  const s = DATA.subjects.find(x => x.id === V.sid); if (!s) return go({ name: "home" });
  const t = nextTest(s), cs = cardsFor(s.id, t?.id), st = stat(cs), menu = todayMenu(s.id, t), d = t ? daysUntil(t.date) : null;
  let h = head(s.name, true);
  if (t) {
    h += '<div class="panel"><div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px;flex-wrap:wrap"><h2>' + esc(t.label) + '</h2><span class="sub">' + (d === 0 ? '<b style="color:var(--ng)">今日</b>' : "あと <b>" + d + "</b> 日") + "</span></div>" +
      '<dl class="testbox"><dt>日時</dt><dd>' + esc(md(t.date)) + (t.time ? " " + esc(t.time) : "") + "</dd>" +
      (t.info ? "<dt>形式</dt><dd>" + esc(t.info) + "</dd>" : "") + (t.range ? "<dt>範囲</dt><dd>" + esc(t.range) + "</dd>" : "") + (t.seat ? "<dt>席</dt><dd>" + esc(t.seat) + "</dd>" : "") + "</dl></div>";
  }
  if (!cs.length) { h += '<div class="panel empty">このテストのカードはまだありません。</div>'; $app.innerHTML = h; bindBack(() => go({ name: "home" })); return; }
  h += '<button class="big" id="today"><div><b>今日の10分</b><span>' + (st.ng ? "まだ " + st.ng + "枚を先に。" : "") + "1枚30秒、思い出すだけ</span></div><div class=\"n\">" + menu.length + '<small style="font-size:.8rem">枚</small></div></button>';
  const pO = st.total ? st.ok / st.total * 100 : 0, pX = st.total ? st.ng / st.total * 100 : 0;
  h += '<div class="panel"><div class="meter"><span>覚えた ' + st.ok + " / " + st.total + '</span><div class="track"><i class="o" style="width:' + pO + '%"></i><i class="x" style="width:' + pX + '%"></i></div></div>' +
    '<div class="legend"><span><i class="dot" style="background:var(--ok)"></i>わかった ' + st.ok + '</span><span><i class="dot" style="background:var(--ng)"></i>まだ ' + st.ng + '</span><span><i class="dot" style="background:var(--line)"></i>未挑戦 ' + st.new + "</span></div></div>";
  h += '<div class="grid2"><button class="opt" id="mock"><b>模擬テスト</b><span>10問・4択で採点</span></button><button class="opt" id="ngonly"' + (st.ng ? "" : " disabled") + "><b>まだのやつ</b><span>" + st.ng + "枚</span></button></div>";
  const secs = [...new Set(cs.map(c => c.sec).filter(Boolean))];
  h += '<div class="panel"><h2>選んで回す</h2><div class="chips"><button class="chip" data-k="star">★これだけ</button><button class="chip" data-k="all">全部（' + cs.length + "）</button>" + secs.map(x => '<button class="chip" data-k="sec:' + esc(x) + '">' + esc(x) + "</button>").join("") + "</div></div>";
  const at = S.attempts.filter(a => a.sid === s.id && (!t || a.test === t.id)).sort((a, b) => String(b.at).localeCompare(String(a.at))).slice(0, 5);
  if (at.length) h += '<div class="panel"><h2>模擬テストの記録</h2><div class="hist">' + at.map(a => "<div><span>" + esc(String(a.at).slice(5, 16).replace("T", " ")) + "</span><b>" + a.score + " / " + a.total + "</b></div>").join("") + "</div></div>";
  $app.innerHTML = h;
  bindBack(() => go({ name: "home" }));
  document.getElementById("today").onclick = () => startStudy(s, todayMenu(s.id, t), "今日の10分");
  document.getElementById("mock").onclick = () => startMock(s, t);
  document.getElementById("ngonly").onclick = () => startStudy(s, shuffle(cs.filter(c => S.prog[c.id]?.r === "ng")), "まだのやつ");
  $app.querySelectorAll(".chip").forEach(b => b.onclick = () => { const k = b.dataset.k; const list = k === "star" ? cs.filter(c => c.star) : k === "all" ? cs : cs.filter(c => "sec:" + c.sec === k); startStudy(s, shuffle(list), b.textContent); });
}

function startStudy(s, list, label) { go({ name: "study", sid: s.id, label, queue: list.slice(), total: list.length, okc: 0, cur: list[0] || null, shown: false, typed: "" }); V.queue.shift(); render(); }
function renderStudy() {
  const v = V, done = v.total - v.queue.length - (v.cur ? 1 : 0);
  let h = head(v.label, true) + '<div class="meter"><span>' + done + " / " + v.total + '</span><div class="track"><i class="o" style="width:' + (v.total ? v.okc / v.total * 100 : 0) + '%"></i></div><span>わかった ' + v.okc + "</span></div>";
  if (!v.cur) {
    const ng = cardsFor(v.sid).filter(c => S.prog[c.id]?.r === "ng").length;
    h += '<div class="card result" tabindex="0"><b style="font-family:var(--display);font-size:1.3rem">おつかれさま</b><span>' + (ng ? "「まだ」は " + ng + " 枚。あとで「まだのやつ」だけ回せばOK。" : "「まだ」は0枚。いい感じです。") + '</span></div><button class="btn pri" id="fin">科目に戻る</button>';
    $app.innerHTML = h; bindBack(() => go({ name: "subject", sid: v.sid })); document.getElementById("fin").onclick = () => go({ name: "subject", sid: v.sid }); return;
  }
  const c = v.cur, p = S.prog[c.id], j = c.spell && v.shown ? judge(v.typed, c.spell) : null;
  h += '<div class="card" id="card" tabindex="0" role="button" aria-label="タップで答えを表示"><div class="meta">' + (c.sec ? '<span class="tag">' + esc(c.sec) + "</span>" : "") + (c.star ? '<span class="starb">★</span>' : "") + (p?.r === "ng" ? "<span>前回まだ</span>" : "") + "</div>" +
    '<div class="q">' + fmt(c.q) + "</div>" + sayBtns(c) +
    (c.spell && !v.shown ? '<input class="spell" id="sp" placeholder="書いてみる（なくてもOK）" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" value="' + esc(v.typed) + '">' : "") +
    (j ? '<div class="judge ' + (j.ok ? "y" : "n") + '">' + esc(j.msg) + "</div>" + (j.ok ? "" : '<div class="yours">あなた：' + esc(v.typed) + "</div>") : "") +
    (v.shown ? '<div class="a">' + fmt(c.a) + "</div>" + (c.ja ? '<div class="ja">' + esc(c.ja) + "</div>" : "") + (c.h ? '<div class="hint">' + fmt(c.h) + "</div>" : "") : '<div class="tap">思い出してからタップ</div>') + "</div>" +
    '<div class="row"><button class="btn ng" id="bng"' + (v.shown ? "" : " disabled") + '>まだ</button><button class="btn ok" id="bok"' + (v.shown ? "" : " disabled") + ">わかった</button></div>";
  $app.innerHTML = h;
  bindBack(() => go({ name: "subject", sid: v.sid }));
  const sp = document.getElementById("sp");
  if (sp) { sp.onclick = e => e.stopPropagation(); sp.oninput = () => { v.typed = sp.value; }; sp.onkeydown = e => { e.stopPropagation(); if (e.key === "Enter") { v.shown = true; renderStudy(); } }; }
  bindSay(c);
  const card = document.getElementById("card");
  card.onclick = () => { v.shown = !v.shown; renderStudy(); };
  card.onkeydown = e => { if (e.target === card && (e.key === " " || e.key === "Enter")) { e.preventDefault(); v.shown = !v.shown; renderStudy(); } };
  document.getElementById("bok").onclick = () => mark(true);
  document.getElementById("bng").onclick = () => mark(false);
}
function saveProg(id, ok) {
  const prev = S.prog[id] || { ok: 0, ng: 0 };
  S.prog[id] = { r: ok ? "ok" : "ng", ok: (prev.ok || 0) + (ok ? 1 : 0), ng: (prev.ng || 0) + (ok ? 0 : 1), at: new Date().toISOString() };
  saveLocal(); push();
}
function mark(ok) {
  const v = V; if (!v.cur || !v.shown) return;
  saveProg(v.cur.id, ok);
  if (ok) v.okc++; else v.queue.splice(Math.min(3, v.queue.length), 0, v.cur);
  v.cur = v.queue.shift() || null; v.shown = false; v.typed = ""; renderStudy();
}

function startMock(s, t) {
  const cs = cardsFor(s.id, t?.id), qs = shuffle(cs).slice(0, Math.min(10, cs.length));
  const items = qs.map(c => {
    const kind = c.id.split("-")[1]?.[0];
    const same = cs.filter(x => x.id !== c.id && x.sec === c.sec && x.id.split("-")[1]?.[0] === kind), other = cs.filter(x => x.id !== c.id && !same.includes(x));
    const ds = []; const seen = new Set([plain(c.a)]);
    for (const x of [...shuffle(same), ...shuffle(other)]) { const a = plain(x.a); if (!seen.has(a)) { seen.add(a); ds.push(x.a); } if (ds.length === 3) break; }
    return { c, opts: shuffle([{ t: c.a, ok: true }, ...ds.map(d => ({ t: d, ok: false }))]), pick: null };
  });
  go({ name: "mock", sid: s.id, tid: t?.id || "", i: 0, items, saved: false });
}
function renderMock() {
  const v = V, n = v.items.length;
  let h = head("模擬テスト", true);
  if (v.i >= n) {
    const score = v.items.filter(x => x.pick !== null && x.opts[x.pick].ok).length;
    if (!v.saved) {
      v.saved = true;
      S.attempts.push({ id: newCode(), sid: v.sid, test: v.tid, score, total: n, at: new Date(Date.now() + 9 * 3600e3).toISOString().replace("Z", "+09:00") });
      v.items.forEach(x => { if (!x.opts[x.pick].ok) saveProg(x.c.id, false); });
      saveLocal(); push();
    }
    const miss = v.items.filter(x => !x.opts[x.pick].ok);
    h += '<div class="panel result"><span class="sub">' + n + '問中</span><span class="score">' + score + "</span><span>" + (score >= 8 ? "本番もこの調子で。" : "まちがえた分を「まだ」に入れました。「今日の10分」で回しましょう。") + "</span></div>";
    if (miss.length) h += '<div class="panel"><h2>まちがえた問題</h2>' + miss.map(x => '<div><div class="q" style="font-size:1rem">' + fmt(x.c.q) + '</div><div class="a">' + fmt(x.c.a) + "</div></div>").join('<hr style="border:0;border-top:1px dashed var(--line);margin:4px 0">') + "</div>";
    h += '<button class="btn pri" id="fin">科目に戻る</button>';
    $app.innerHTML = h; bindBack(() => go({ name: "subject", sid: v.sid })); document.getElementById("fin").onclick = () => go({ name: "subject", sid: v.sid }); return;
  }
  const it = v.items[v.i];
  h += '<div class="meter"><span>' + (v.i + 1) + " / " + n + '</span><div class="track"><i class="o" style="width:' + (v.i / n * 100) + '%"></i></div></div>';
  h += '<div class="card" style="cursor:default"><div class="meta">' + (it.c.sec ? '<span class="tag">' + esc(it.c.sec) + "</span>" : "") + '</div><div class="q">' + fmt(it.c.q) + "</div>" + sayBtns(it.c) + '<div class="choices">' +
    it.opts.map((o, k) => { let cls = "choice"; if (it.pick !== null) { if (o.ok) cls += " right"; else if (k === it.pick) cls += " wrong"; } return '<button class="' + cls + '" data-k="' + k + '"' + (it.pick !== null ? " disabled" : "") + ">" + fmt(o.t) + "</button>"; }).join("") + "</div>" +
    (it.pick !== null && it.c.h ? '<div class="hint">' + fmt(it.c.h) + "</div>" : "") + "</div>";
  if (it.pick !== null) h += '<button class="btn pri" id="nx">' + (v.i + 1 < n ? "次へ" : "結果を見る") + "</button>";
  $app.innerHTML = h;
  bindBack(() => go({ name: "subject", sid: v.sid }));
  bindSay(it.c);
  $app.querySelectorAll(".choice").forEach(b => b.onclick = () => { if (it.pick !== null) return; it.pick = +b.dataset.k; renderMock(); });
  const nx = document.getElementById("nx"); if (nx) nx.onclick = () => { v.i++; renderMock(); };
}

function renderSync() {
  let h = head("記録の同期", true);
  h += '<div class="panel"><h2>この端末の同期コード</h2><div class="code" id="code">' + esc(S.code) + '</div><button class="btn line" id="copy">コードをコピー</button>' +
    '<div class="syncline">状態：' + esc(syncState) + (S.synced ? "（最後に同期 " + esc(S.synced.slice(5, 16).replace("T", " ")) + "）" : "") + "</div></div>";
  h += '<div class="panel"><h2>ほかの端末の記録とつなぐ</h2><div class="sub">スマホで出ているコードをPCに入れると、同じ記録で続きができます。</div><input class="spell" id="newcode" placeholder="同期コード（10文字）" autocomplete="off" autocapitalize="off" spellcheck="false"><button class="btn pri" id="join">このコードでつなぐ</button></div>';
  $app.innerHTML = h;
  bindBack(() => go({ name: "home" }));
  document.getElementById("copy").onclick = () => { navigator.clipboard?.writeText(S.code).then(() => toast("コピーしました"), () => toast("コードを長押しでコピー")); };
  document.getElementById("join").onclick = async () => {
    const c = document.getElementById("newcode").value.trim().toLowerCase();
    if (!/^[a-z0-9]{8,32}$/.test(c)) { toast("コードの形がちがいます"); return; }
    S.code = c; saveLocal(); await pull(); push(); toast("つなぎました"); go({ name: "home" });
  };
}

render();
pull().then(() => push());
if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
