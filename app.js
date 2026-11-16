/* =====================================================
   莎士比亞經典劇本詞彙 A–Z 辭典
   欄位說明：letter / word / phonetic / pos / play / quoteEn / quoteZh / image
   blank：金句中要被挖空的字（小考模式使用）
   ===================================================== */
const WORDS = [
  {
    letter: "A", word: "Ambition", phonetic: "/æmˈbɪʃ.ən/", pos: "n. 野心、抱負",
    play: "《馬克白》Macbeth, Act 1, Scene 7",
    quoteEn: "Vaulting ambition, which o'erleaps itself and falls on the other.",
    quoteZh: "那凌空躍起的野心，一躍過頭，終將墜向另一側。",
    image: "assets/images/a-ambition.png", blank: "ambition"
  },
  {
    letter: "B", word: "Banish", phonetic: "/ˈbæn.ɪʃ/", pos: "v. 放逐、驅逐",
    play: "《羅密歐與茱麗葉》Romeo and Juliet, Act 3, Scene 3",
    quoteEn: "Ha, banishment! Be merciful, say 'death'.",
    quoteZh: "啊，放逐！行行好吧，請對我說「死」。",
    image: "assets/images/b-banish.png", blank: "banishment"
  },
  {
    letter: "C", word: "Conscience", phonetic: "/ˈkɒn.ʃəns/", pos: "n. 良心、道德感",
    play: "《哈姆雷特》Hamlet, Act 3, Scene 1",
    quoteEn: "Thus conscience does make cowards of us all.",
    quoteZh: "於是，良心使我們全都成了懦夫。",
    image: "assets/images/c-conscience.png", blank: "conscience"
  },
  {
    letter: "D", word: "Dagger", phonetic: "/ˈdæɡ.ə/", pos: "n. 匕首",
    play: "《馬克白》Macbeth, Act 2, Scene 1",
    quoteEn: "Is this a dagger which I see before me, the handle toward my hand?",
    quoteZh: "我眼前所見的，莫非是一把匕首？刀柄正朝向我的手。",
    image: "assets/images/d-dagger.png", blank: "dagger"
  },
  {
    letter: "E", word: "Exit", phonetic: "/ˈeɡ.zɪt/", pos: "n. 退場、出口",
    play: "《皆大歡喜》As You Like It, Act 2, Scene 7",
    quoteEn: "They have their exits and their entrances; and one man in his time plays many parts.",
    quoteZh: "他們各有退場，亦各有登場；一個人在世，分飾多重角色。",
    image: "assets/images/e-exit.png", blank: "exits"
  },
  {
    letter: "F", word: "Fortune", phonetic: "/ˈfɔː.tʃuːn/", pos: "n. 命運、財富",
    play: "《哈姆雷特》Hamlet, Act 3, Scene 1",
    quoteEn: "The slings and arrows of outrageous fortune.",
    quoteZh: "暴虐命運射來的亂石與飛箭。",
    image: "assets/images/f-fortune.png", blank: "fortune"
  },
  {
    letter: "G", word: "Ghost", phonetic: "/ɡəʊst/", pos: "n. 鬼魂、幽靈",
    play: "《哈姆雷特》Hamlet, Act 1, Scene 5",
    quoteEn: "Alas, poor ghost!",
    quoteZh: "唉，可憐的幽魂！",
    image: "assets/images/g-ghost.png", blank: "ghost"
  },
  {
    letter: "H", word: "Honour", phonetic: "/ˈɒn.ə/", pos: "n. 榮譽、名節",
    play: "《亨利四世（上）》Henry IV, Part 1, Act 5, Scene 1",
    quoteEn: "What is honour? A word.",
    quoteZh: "榮譽是什麼？不過是一個詞。",
    image: "assets/images/h-honour.png", blank: "honour"
  },
  {
    letter: "I", word: "Infirm", phonetic: "/ɪnˈfɜːm/", pos: "adj. 虛弱的、意志薄弱的",
    play: "《馬克白》Macbeth, Act 2, Scene 2",
    quoteEn: "Infirm of purpose! Give me the daggers.",
    quoteZh: "意志薄弱的人！把匕首給我。",
    image: "assets/images/i-infirm.png", blank: "infirm"
  },
  {
    letter: "J", word: "Jealousy", phonetic: "/ˈdʒel.ə.si/", pos: "n. 嫉妒、猜忌",
    play: "《奧賽羅》Othello, Act 3, Scene 3",
    quoteEn: "O, beware, my lord, of jealousy! It is the green-eyed monster which doth mock the meat it feeds on.",
    quoteZh: "啊，主公，當心嫉妒！那是綠眼的怪物，嘲弄著它所啃食的血肉。",
    image: "assets/images/j-jealousy.png", blank: "jealousy"
  },
  {
    letter: "K", word: "Kingdom", phonetic: "/ˈkɪŋ.dəm/", pos: "n. 王國、領域",
    play: "《理查三世》Richard III, Act 5, Scene 4",
    quoteEn: "A horse! A horse! My kingdom for a horse!",
    quoteZh: "一匹馬！一匹馬！我願以王國，換一匹馬！",
    image: "assets/images/k-kingdom.png", blank: "kingdom"
  },
  {
    letter: "L", word: "Lunatic", phonetic: "/ˈluː.nə.tɪk/", pos: "n. 瘋子、狂人",
    play: "《仲夏夜之夢》A Midsummer Night's Dream, Act 5, Scene 1",
    quoteEn: "The lunatic, the lover, and the poet are of imagination all compact.",
    quoteZh: "瘋子、情人與詩人，滿腦子盡是想像。",
    image: "assets/images/l-lunatic.png", blank: "lunatic"
  },
  {
    letter: "M", word: "Mercy", phonetic: "/ˈmɜː.si/", pos: "n. 慈悲、寬恕",
    play: "《威尼斯商人》The Merchant of Venice, Act 4, Scene 1",
    quoteEn: "The quality of mercy is not strain'd; it droppeth as the gentle rain from heaven.",
    quoteZh: "慈悲不是勉強而來的；它如甘霖，輕輕自天而降。",
    image: "assets/images/m-mercy.png", blank: "mercy"
  },
  {
    letter: "N", word: "Nunnery", phonetic: "/ˈnʌn.ər.i/", pos: "n. 修道院",
    play: "《哈姆雷特》Hamlet, Act 3, Scene 1",
    quoteEn: "Get thee to a nunnery!",
    quoteZh: "去修道院吧！",
    image: "assets/images/n-nunnery.png", blank: "nunnery"
  },
  {
    letter: "O", word: "Offence", phonetic: "/əˈfens/", pos: "n. 罪孽、冒犯",
    play: "《哈姆雷特》Hamlet, Act 3, Scene 3",
    quoteEn: "O, my offence is rank, it smells to heaven.",
    quoteZh: "哦，我的罪孽腥臭，直沖天際。",
    image: "assets/images/o-offence.png", blank: "offence"
  },
  {
    letter: "P", word: "Parting", phonetic: "/ˈpɑː.tɪŋ/", pos: "n. 離別、道別",
    play: "《羅密歐與茱麗葉》Romeo and Juliet, Act 2, Scene 2",
    quoteEn: "Parting is such sweet sorrow.",
    quoteZh: "離別是如此甜蜜的哀愁。",
    image: "assets/images/p-parting.png", blank: "parting"
  },
  {
    letter: "Q", word: "Quintessence", phonetic: "/kwɪnˈtes.əns/", pos: "n. 精華、典範",
    play: "《哈姆雷特》Hamlet, Act 2, Scene 2",
    quoteEn: "What is this quintessence of dust?",
    quoteZh: "這塵土的精華，又算得了什麼？",
    image: "assets/images/q-quintessence.png", blank: "quintessence"
  },
  {
    letter: "R", word: "Rose", phonetic: "/rəʊz/", pos: "n. 玫瑰",
    play: "《羅密歐與茱麗葉》Romeo and Juliet, Act 2, Scene 2",
    quoteEn: "What's in a name? That which we call a rose by any other name would smell as sweet.",
    quoteZh: "名字算什麼？我們稱為玫瑰的花，換個名字，依舊芬芳。",
    image: "assets/images/r-rose.png", blank: "rose"
  },
  {
    letter: "S", word: "Sleep", phonetic: "/sliːp/", pos: "n. 睡眠、安眠",
    play: "《馬克白》Macbeth, Act 2, Scene 2",
    quoteEn: "Sleep no more! Macbeth does murder sleep.",
    quoteZh: "不會再有安眠了！馬克白謀殺了睡眠。",
    image: "assets/images/s-sleep.png", blank: "sleep"
  },
  {
    letter: "T", word: "Tomorrow", phonetic: "/təˈmɒr.əʊ/", pos: "n. 明天、未來",
    play: "《馬克白》Macbeth, Act 5, Scene 5",
    quoteEn: "Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day.",
    quoteZh: "明日，又明日，再一個明日，以細碎的步伐一天天爬行。",
    image: "assets/images/t-tomorrow.png", blank: "tomorrow"
  },
  {
    letter: "U", word: "Unweeded", phonetic: "/ʌnˈwiː.dɪd/", pos: "adj. 未除草的、荒蕪的",
    play: "《哈姆雷特》Hamlet, Act 1, Scene 2",
    quoteEn: "'Tis an unweeded garden, that grows to seed.",
    quoteZh: "這是一座荒蕪的花園，任其蔓生而走向敗壞。",
    image: "assets/images/u-unweeded.png", blank: "unweeded"
  },
  {
    letter: "V", word: "Villain", phonetic: "/ˈvɪl.ən/", pos: "n. 惡棍、反派",
    play: "《理查三世》Richard III, Act 1, Scene 1",
    quoteEn: "I am determined to prove a villain and hate the idle pleasures of these days.",
    quoteZh: "我已決心做一名惡棍，並憎恨這時代虛度光陰的閒適。",
    image: "assets/images/v-villain.png", blank: "villain"
  },
  {
    letter: "W", word: "Winter", phonetic: "/ˈwɪn.tə/", pos: "n. 冬天、寒冬",
    play: "《理查三世》Richard III, Act 1, Scene 1",
    quoteEn: "Now is the winter of our discontent.",
    quoteZh: "我們不滿的冬天，此刻終於走到盡頭。",
    image: "assets/images/w-winter.png", blank: "winter"
  },
  {
    letter: "X", word: "Xanthippe", phonetic: "/zænˈtɪp.i/", pos: "n. 贊西佩（蘇格拉底之妻，悍婦的代稱）",
    play: "《馴悍記》The Taming of the Shrew, Act 1, Scene 2",
    quoteEn: "As old as Sibyl, and as curst and shrewd as Socrates' Xanthippe, or a worse.",
    quoteZh: "老如西比拉，兇悍似蘇格拉底之妻贊西佩，甚至更甚。",
    image: "assets/images/x-xanthippe.png", blank: "xanthippe"
  },
  {
    letter: "Y", word: "Yorick", phonetic: "/ˈjɒr.ɪk/", pos: "n. 尤里克（已故宮廷小丑）",
    play: "《哈姆雷特》Hamlet, Act 5, Scene 1",
    quoteEn: "Alas, poor Yorick! I knew him, Horatio.",
    quoteZh: "唉，可憐的尤里克！我認得他，霍拉旭。",
    image: "assets/images/y-yorick.png", blank: "yorick"
  },
  {
    letter: "Z", word: "Zed", phonetic: "/zed/", pos: "n. 字母 Z（英式讀法）",
    play: "《李爾王》King Lear, Act 2, Scene 2",
    quoteEn: "Thou whoreson zed! Thou unnecessary letter!",
    quoteZh: "你這可惡的 Z！你這多餘的字母！",
    image: "assets/images/z-zed.png", blank: "zed"
  }
];

/* ================= DOM ================= */
const $ = (id) => document.getElementById(id);
const els = {
  card: $("card"), badge: $("badge"), play: $("play"),
  img: $("img"), caption: $("caption"),
  answer: $("answer"), mystery: $("mystery"),
  word: $("word"), phonetic: $("phonetic"), pos: $("pos"),
  quoteEn: $("quote-en"), quoteZh: $("quote-zh"), quoteSource: $("quote-source"),
  speakWord: $("btn-speak-word"), speakQuote: $("btn-speak-quote"),
  speechNote: $("speech-note"), quizHint: $("quiz-hint"),
  prev: $("btn-prev"), next: $("btn-next"),
  quiz: $("btn-quiz"), quizLabel: $("quiz-label"),
  counter: $("counter"), nav: $("index-nav")
};

let currentIndex = 0;
let quizOn = false;
let revealed = false;

/* ================= 語音（Web Speech API） ================= */
const synth = window.speechSynthesis || null;
let britishVoice = null;
let speechToken = 0; // 用來作廢過期的發音請求

function pickVoice() {
  if (!synth) return;
  const voices = synth.getVoices();
  const norm = (v) => v.lang.replace("_", "-").toLowerCase();
  britishVoice =
    voices.find((v) => norm(v) === "en-gb") ||
    voices.find((v) => norm(v).startsWith("en-gb")) ||
    voices.find((v) => norm(v).startsWith("en")) ||
    null;
}

function clearSpeakingState() {
  els.speakWord.classList.remove("speaking");
  els.speakQuote.classList.remove("speaking");
}

function stopSpeech() {
  speechToken++;
  if (synth) synth.cancel(); // 防疊音：先停止上一段語音
  clearSpeakingState();
}

function speak(text, button) {
  if (!synth) return;
  stopSpeech();
  const myToken = speechToken;

  // 部分瀏覽器在 cancel() 後立即 speak() 會被吞掉，稍作延遲
  setTimeout(() => {
    if (myToken !== speechToken) return;

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-GB";
    utter.rate = 0.9;
    if (britishVoice) utter.voice = britishVoice;

    utter.onstart = () => {
      if (myToken === speechToken) button.classList.add("speaking");
    };
    const done = () => {
      if (myToken === speechToken) button.classList.remove("speaking");
    };
    utter.onend = done;
    utter.onerror = done;

    synth.speak(utter);
  }, 60);
}

function initSpeech() {
  if (!synth || typeof SpeechSynthesisUtterance === "undefined") {
    els.speakWord.disabled = true;
    els.speakQuote.disabled = true;
    els.speechNote.hidden = false;
    els.speechNote.textContent = "此瀏覽器不支援語音朗讀功能。";
    return;
  }
  pickVoice();
  if (typeof synth.onvoiceschanged !== "undefined") {
    synth.onvoiceschanged = pickVoice;
  }
}

/* ================= 圖片占位（藏書票 SVG） ================= */
function bookplateSvg(item) {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
  <defs>
    <radialGradient id="g" cx="50%" cy="45%" r="75%">
      <stop offset="0" stop-color="#F8F2E4"/>
      <stop offset="1" stop-color="#E2D3B2"/>
    </radialGradient>
    <filter id="n" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" result="t"/>
      <feColorMatrix in="t" type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="table" tableValues="0 0.14"/></feComponentTransfer>
    </filter>
  </defs>
  <rect width="400" height="400" fill="url(#g)"/>
  <rect width="400" height="400" filter="url(#n)"/>
  <rect x="16" y="16" width="368" height="368" fill="none" stroke="#7A2021" stroke-width="3"/>
  <rect x="26" y="26" width="348" height="348" fill="none" stroke="#B8860B" stroke-width="1.2"/>
  <g fill="#B8860B">
    <circle cx="26" cy="26" r="5"/><circle cx="374" cy="26" r="5"/>
    <circle cx="26" cy="374" r="5"/><circle cx="374" cy="374" r="5"/>
  </g>
  <text x="200" y="72" text-anchor="middle" font-family="Playfair Display, Georgia, serif"
        font-size="16" letter-spacing="7" fill="#B8860B">EX LIBRIS</text>
  <line x1="120" y1="86" x2="280" y2="86" stroke="#B8860B" stroke-width="1"/>
  <text x="200" y="245" text-anchor="middle" font-family="Playfair Display, Georgia, serif"
        font-size="170" font-weight="700" fill="#7A2021">${item.letter}</text>
  <text x="200" y="300" text-anchor="middle" font-size="22" fill="#B8860B">❦</text>
  <text x="200" y="338" text-anchor="middle" font-family="Playfair Display, Georgia, serif"
        font-style="italic" font-size="22" fill="#2C2520">Shakespeare's Lexicon</text>
</svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg.trim());
}

/* ================= 金句渲染（高亮／挖空） ================= */
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderQuote(item, hide) {
  const parts = item.quoteEn.split(new RegExp("(" + escapeRegExp(item.blank) + ")", "gi"));
  els.quoteEn.textContent = "";
  parts.forEach((part, i) => {
    if (i % 2 === 1) {
      const span = document.createElement("span");
      if (hide) {
        span.className = "blank";
        span.setAttribute("aria-label", "（空格）");
      } else {
        span.className = "hl";
        span.textContent = part;
      }
      els.quoteEn.appendChild(span);
    } else if (part) {
      els.quoteEn.appendChild(document.createTextNode(part));
    }
  });
}

/* ================= 畫面渲染 ================= */
function render() {
  const item = WORDS[currentIndex];
  const hide = quizOn && !revealed;

  els.badge.textContent = `${item.letter} ${item.letter.toLowerCase()}`;
  els.play.textContent = item.play;

  // 圖片與防破圖
  els.img.onerror = () => {
    els.img.onerror = null; // 避免無限迴圈
    els.img.src = bookplateSvg(item);
  };
  els.img.src = item.image;
  els.img.alt = hide ? "謎題插圖" : `${item.word} 插圖`;
  els.caption.textContent = `Plate ${item.letter}${hide ? "" : " · " + item.word}`;

  // 單字區
  els.word.textContent = item.word;
  els.phonetic.textContent = item.phonetic;
  els.pos.textContent = item.pos;
  els.answer.hidden = hide;
  els.mystery.hidden = !hide;

  // 金句
  renderQuote(item, hide);
  els.quoteZh.hidden = hide;
  els.quoteZh.textContent = item.quoteZh;
  els.quoteSource.textContent = item.play;

  // 小考模式下，朗讀會洩漏答案，揭曉前先停用
  els.speakWord.disabled = hide || !synth;
  els.speakQuote.disabled = hide || !synth;

  els.quizHint.hidden = !hide;
  els.card.classList.toggle("is-quiz", hide);

  // 導覽防呆：首尾禁用
  els.prev.disabled = currentIndex === 0;
  els.next.disabled = currentIndex === WORDS.length - 1;
  els.counter.textContent = `Scene ${currentIndex + 1} / ${WORDS.length}`;

  // 索引列高亮
  els.nav.querySelectorAll(".index-btn").forEach((btn, i) => {
    const active = i === currentIndex;
    btn.classList.toggle("active", active);
    if (active) btn.setAttribute("aria-current", "true");
    else btn.removeAttribute("aria-current");
  });

  // 重新觸發卡片進場動畫
  els.card.style.animation = "none";
  void els.card.offsetWidth;
  els.card.style.animation = "";
}

function goTo(index) {
  if (index < 0 || index >= WORDS.length) return;
  stopSpeech(); // 切換卡片先停止語音
  currentIndex = index;
  revealed = false;
  render();
}

function reveal() {
  if (!quizOn || revealed) return;
  revealed = true;
  render();
}

function toggleQuiz() {
  stopSpeech();
  quizOn = !quizOn;
  revealed = false;
  els.quiz.setAttribute("aria-pressed", String(quizOn));
  els.quizLabel.textContent = quizOn ? "文青小考進行中（點卡片揭曉）" : "遮蔽單字練習（文青小考）";
  render();
}

/* ================= 索引列 ================= */
function buildIndexNav() {
  const frag = document.createDocumentFragment();
  WORDS.forEach((item, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "index-btn";
    btn.textContent = item.letter;
    btn.setAttribute("aria-label", `跳到 ${item.letter}`);
    btn.addEventListener("click", () => goTo(i));
    frag.appendChild(btn);
  });
  els.nav.appendChild(frag);
}

/* ================= 事件 ================= */
els.speakWord.addEventListener("click", () => speak(WORDS[currentIndex].word, els.speakWord));
els.speakQuote.addEventListener("click", () => speak(WORDS[currentIndex].quoteEn, els.speakQuote));
els.prev.addEventListener("click", () => goTo(currentIndex - 1));
els.next.addEventListener("click", () => goTo(currentIndex + 1));
els.quiz.addEventListener("click", toggleQuiz);

// 點擊卡片（非按鈕區域）揭曉答案
els.card.addEventListener("click", (e) => {
  if (e.target.closest("button")) return;
  reveal();
});

// 鍵盤：卡片聚焦時 Enter / 空白鍵揭曉；左右方向鍵切換
els.card.addEventListener("keydown", (e) => {
  if ((e.key === "Enter" || e.key === " ") && e.target === els.card) {
    e.preventDefault();
    reveal();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") goTo(currentIndex - 1);
  if (e.key === "ArrowRight") goTo(currentIndex + 1);
});

// 離開頁面時停止語音
window.addEventListener("beforeunload", () => { if (synth) synth.cancel(); });

/* ================= 初始化 ================= */
initSpeech();
buildIndexNav();
render();