import { transformTextWithStyle, UNICODE_FONT_STYLE_IDS } from "@/lib/textStyles";

export type NickTab = "havali" | "sekilli" | "oyun" | "instagram";

export type NickTier = "popular" | "trending" | "other";

export type NickFontFilter = "all" | "popular" | "bold" | "italic" | "fancy";

export type NickStyleItem = {
  id: string;
  label: string;
  preview: string;
  tier: NickTier;
  tabs: NickTab[];
  styleId: string;
};

const BOLD_IDS = new Set([
  "bold",
  "sansBold",
  "gothicBold",
  "boldItalic",
  "negativeSquared",
  "negativeCircled",
]);

const ITALIC_IDS = new Set(["italic", "sansItalic", "sansBoldItalic"]);

const FANCY_IDS = new Set([
  "script",
  "scriptLight",
  "gothic",
  "double",
  "bubble",
  "wide",
  "square",
  "smallCaps",
  "mono",
  "superscript",
  "subscript",
]);

type Wrap = { pre: string; post: string; emoji: boolean };

const WRAPS_MINIMAL: Wrap[] = [
  { pre: "", post: "", emoji: false },
  { pre: "•", post: "•", emoji: false },
  { pre: "·", post: "·", emoji: false },
  { pre: "*", post: "*", emoji: false },
  { pre: "|", post: "|", emoji: false },
  { pre: "「", post: "」", emoji: false },
  { pre: "『", post: "』", emoji: false },
  { pre: "【", post: "】", emoji: false },
  { pre: "《", post: "》", emoji: false },
  { pre: "〈", post: "〉", emoji: false },
  { pre: "꧁", post: "꧂", emoji: false },
  { pre: "⟦", post: "⟧", emoji: false },
  { pre: "⦃", post: "⦄", emoji: false },
  { pre: "〚", post: "〛", emoji: false },
  { pre: "⌜", post: "⌟", emoji: false },
  { pre: "╰", post: "╯", emoji: false },
  { pre: "乂", post: "乂", emoji: false },
  { pre: "¤", post: "¤", emoji: false },
  { pre: "░", post: "░", emoji: false },
  { pre: "▸", post: "◂", emoji: false },
  { pre: "〔", post: "〕", emoji: false },
];

const WRAPS_EMOJI: Wrap[] = [
  { pre: "✨", post: "✨", emoji: true },
  { pre: "🔥", post: "🔥", emoji: true },
  { pre: "⭐", post: "⭐", emoji: true },
  { pre: "💎", post: "💎", emoji: true },
  { pre: "👑", post: "👑", emoji: true },
  { pre: "❤️", post: "❤️", emoji: true },
  { pre: "🖤", post: "🖤", emoji: true },
  { pre: "⚡", post: "⚡", emoji: true },
  { pre: "🌙", post: "🌙", emoji: true },
  { pre: "🌸", post: "🌸", emoji: true },
  { pre: "🦋", post: "🦋", emoji: true },
  { pre: "🎮", post: "🎮", emoji: true },
  { pre: "🏆", post: "🏆", emoji: true },
  { pre: "✧", post: "✧", emoji: true },
  { pre: "✦", post: "✦", emoji: true },
  { pre: "☆", post: "☆", emoji: false },
  { pre: "★", post: "★", emoji: false },
  { pre: "♛", post: "♛", emoji: false },
  { pre: "♚", post: "♚", emoji: false },
  { pre: "⚜", post: "⚜", emoji: false },
  { pre: "❖", post: "❖", emoji: false },
  { pre: "✿", post: "✿", emoji: false },
  { pre: "❀", post: "❀", emoji: false },
  { pre: "༺", post: "༻", emoji: false },
  { pre: "彡", post: "彡", emoji: false },
  { pre: "「✨", post: "✨」", emoji: true },
  { pre: "『🔥", post: "🔥』", emoji: true },
];

const PREFIX_ONLY: { pre: string; emoji: boolean }[] = [
  { pre: "★彡", emoji: false },
  { pre: "彡★", emoji: false },
  { pre: "⎝⎠", emoji: false },
  { pre: "╾", emoji: false },
  { pre: "▪", emoji: false },
];

const SEPARATORS = ["·", "•", "‧", "･", " ", " ╳ ", " ✦ ", " │ "];

type Curated = {
  label: string;
  styleId: string;
  pre: string;
  post: string;
  tier: NickTier;
  tabs: NickTab[];
};

const CURATED_POPULAR: Curated[] = [
  { label: "Popüler · Kalın", styleId: "bold", pre: "", post: "", tier: "popular", tabs: ["havali", "instagram"] },
  { label: "Popüler · El Yazısı", styleId: "script", pre: "", post: "", tier: "popular", tabs: ["havali", "instagram"] },
  { label: "Popüler · Çift Çizgi", styleId: "double", pre: "", post: "", tier: "popular", tabs: ["sekilli", "instagram"] },
  { label: "Popüler · Sans Kalın", styleId: "sansBold", pre: "", post: "", tier: "popular", tabs: ["havali", "oyun"] },
  { label: "Popüler · Kalın İtalik", styleId: "boldItalic", pre: "", post: "", tier: "popular", tabs: ["havali"] },
  { label: "Popüler · Monospace", styleId: "mono", pre: "", post: "", tier: "popular", tabs: ["oyun"] },
  { label: "Popüler · Baloncuk", styleId: "bubble", pre: "", post: "", tier: "popular", tabs: ["sekilli", "instagram"] },
  { label: "Popüler · Geniş", styleId: "wide", pre: "", post: "", tier: "popular", tabs: ["instagram"] },
  { label: "Popüler · Gotik", styleId: "gothicBold", pre: "", post: "", tier: "popular", tabs: ["havali", "sekilli"] },
  { label: "Taçlı Nick", styleId: "sansBold", pre: "👑 ", post: " 👑", tier: "popular", tabs: ["instagram", "havali"] },
  { label: "Yıldızlı Nick", styleId: "bold", pre: "★ ", post: " ★", tier: "popular", tabs: ["havali"] },
  { label: "Ateşli Nick", styleId: "boldItalic", pre: "🔥 ", post: " 🔥", tier: "popular", tabs: ["havali", "oyun"] },
  { label: "Elmas Nick", styleId: "double", pre: "💎 ", post: " 💎", tier: "popular", tabs: ["instagram"] },
  { label: "Kanatlı Nick", styleId: "script", pre: "꧁", post: "꧂", tier: "popular", tabs: ["sekilli", "instagram"] },
  { label: "Köşeli Nick", styleId: "sansBold", pre: "『", post: "』", tier: "popular", tabs: ["havali"] },
  { label: "Parantez Nick", styleId: "italic", pre: "【", post: "】", tier: "popular", tabs: ["instagram"] },
  { label: "Minimal · Nokta", styleId: "sans", pre: "· ", post: " ·", tier: "popular", tabs: ["instagram"] },
  { label: "Çerçeve Nick", styleId: "scriptLight", pre: "「", post: "」", tier: "popular", tabs: ["sekilli"] },
  { label: "Çift Yıldız", styleId: "sansItalic", pre: "✦ ", post: " ✦", tier: "popular", tabs: ["instagram"] },
  { label: "Kare Blok", styleId: "negativeSquared", pre: "", post: "", tier: "popular", tabs: ["oyun"] },
  { label: "Daire Stil", styleId: "negativeCircled", pre: "", post: "", tier: "popular", tabs: ["sekilli"] },
  { label: "Süslü Parıltı", styleId: "scriptLight", pre: "✨ ", post: " ✨", tier: "popular", tabs: ["instagram"] },
  { label: "Gamer Çerçeve", styleId: "gothicBold", pre: "×", post: "×", tier: "popular", tabs: ["oyun"] },
  { label: "Şık Tırnak", styleId: "double", pre: "『", post: "』", tier: "popular", tabs: ["havali"] },
  { label: "Ninja Çizgi", styleId: "mono", pre: "丨", post: "丨", tier: "popular", tabs: ["oyun"] },
  { label: "Küçük Büyük Harf", styleId: "smallCaps", pre: "", post: "", tier: "popular", tabs: ["instagram"] },
  { label: "İnce El Yazısı", styleId: "scriptLight", pre: "", post: "", tier: "popular", tabs: ["sekilli"] },
  { label: "Gotik İnce", styleId: "gothic", pre: "", post: "", tier: "popular", tabs: ["sekilli"] },
  { label: "Üst Simge", styleId: "superscript", pre: "", post: "", tier: "popular", tabs: ["sekilli"] },
  { label: "Kare Harf", styleId: "square", pre: "", post: "", tier: "popular", tabs: ["sekilli"] },
];

const CURATED_TRENDING: Curated[] = [
  { label: "xX Stil", styleId: "bold", pre: "xX_", post: "_Xx", tier: "trending", tabs: ["oyun"] },
  { label: "xX Script", styleId: "script", pre: "xX_", post: "_Xx", tier: "trending", tabs: ["oyun"] },
  { label: "Japon Katakana Son", styleId: "sansBold", pre: "", post: "ツ", tier: "trending", tabs: ["oyun", "havali"] },
  { label: "Kanji Son 么", styleId: "sansBold", pre: "", post: "么", tier: "trending", tabs: ["oyun"] },
  { label: "Çarpı Çerçeve", styleId: "bold", pre: "乂", post: "乂", tier: "trending", tabs: ["oyun", "havali"] },
  { label: "Yıldız Şerit", styleId: "script", pre: "★彡", post: "彡★", tier: "trending", tabs: ["oyun", "havali"] },
  { label: "Klan Köşe", styleId: "gothicBold", pre: "「", post: "」", tier: "trending", tabs: ["oyun"] },
  { label: "Pro Çizgi", styleId: "mono", pre: "▪", post: "▪", tier: "trending", tabs: ["oyun"] },
  { label: "IG Bio 1", styleId: "sansBold", pre: "✦ ", post: " ✦", tier: "trending", tabs: ["instagram"] },
  { label: "IG Bio 2", styleId: "wide", pre: "⊹ ", post: " ⊹", tier: "trending", tabs: ["instagram"] },
  { label: "IG Script", styleId: "script", pre: "✨ ", post: " ✨", tier: "trending", tabs: ["instagram"] },
  { label: "TikTok Glow", styleId: "boldItalic", pre: "☆", post: "☆", tier: "trending", tabs: ["instagram", "havali"] },
  { label: "Discord Mono", styleId: "mono", pre: "`", post: "`", tier: "trending", tabs: ["oyun"] },
  { label: "PUBG Kısa", styleId: "sansBold", pre: "々", post: "々", tier: "trending", tabs: ["oyun"] },
  { label: "Free Fire", styleId: "double", pre: "༒", post: "༒", tier: "trending", tabs: ["oyun"] },
  { label: "E-spor", styleId: "sansBoldItalic", pre: "「", post: "」", tier: "trending", tabs: ["oyun"] },
  { label: "Gece Modu", styleId: "sans", pre: "🌙 ", post: " 🌙", tier: "trending", tabs: ["instagram"] },
  { label: "Neon His", styleId: "wide", pre: "▸", post: "◂", tier: "trending", tabs: ["havali"] },
  { label: "Kawaii", styleId: "bubble", pre: "ʕ•ᴥ•ʔ ", post: "", tier: "trending", tabs: ["instagram"] },
  { label: "Ok İşaretli", styleId: "italic", pre: "» ", post: " «", tier: "trending", tabs: ["havali"] },
  { label: "Lüks Çizgi", styleId: "double", pre: "─", post: "─", tier: "trending", tabs: ["instagram"] },
  { label: "Minimal Çerçeve", styleId: "sansItalic", pre: "〔", post: "〕", tier: "trending", tabs: ["instagram"] },
  { label: "Havalı Köşe", styleId: "bold", pre: "╰", post: "╯", tier: "trending", tabs: ["havali"] },
  { label: "Şimşek", styleId: "sansBold", pre: "⚡", post: "⚡", tier: "trending", tabs: ["havali", "oyun"] },
  { label: "Çiçek", styleId: "sansItalic", pre: "✿ ", post: " ✿", tier: "trending", tabs: ["instagram"] },
  { label: "Kelebek", styleId: "scriptLight", pre: "🦋 ", post: " 🦋", tier: "trending", tabs: ["instagram"] },
  { label: "Oyun Pad", styleId: "mono", pre: "🎮 ", post: " 🎮", tier: "trending", tabs: ["oyun"] },
  { label: "Kupa", styleId: "bold", pre: "🏆 ", post: " 🏆", tier: "trending", tabs: ["oyun"] },
  { label: "Bar Kutusu", styleId: "negativeSquared", pre: "▌", post: "▐", tier: "trending", tabs: ["oyun"] },
  { label: "Soyut", styleId: "gothic", pre: "༺", post: "༻", tier: "trending", tabs: ["sekilli", "havali"] },
];

const GAMER_TEMPLATES: ((s: string) => string)[] = [
  (s) => `xX_${s}_Xx`,
  (s) => `_${s}_`,
  (s) => `${s}ツ`,
  (s) => `${s}么`,
  (s) => `乂${s}乂`,
  (s) => `|${s}|`,
  (s) => `•${s}•`,
  (s) => `《${s}》`,
  (s) => `「${s}」`,
  (s) => `༒ ${s} ༒`,
  (s) => `★ ${s} ★`,
  (s) => `⚡${s}⚡`,
  (s) => `▪${s}▪`,
  (s) => `/${s}/`,
  (s) => `〆${s}〆`,
  (s) => `々${s}々`,
  (s) => `【${s}】`,
  (s) => `⌈${s}⌉`,
];

function applyWrap(styled: string, w: Wrap): string {
  if (!w.pre && !w.post) return styled;
  return `${w.pre}${styled}${w.post}`;
}

function joinWithSep(styled: string, sep: string): string {
  const chars = Array.from(styled);
  if (chars.length <= 1) return styled;
  return chars.join(sep);
}

let idCounter = 0;
function nextId(): string {
  idCounter += 1;
  return `nick-${idCounter}`;
}

function resetIds(): void {
  idCounter = 0;
}

function pushUnique(
  seen: Set<string>,
  out: NickStyleItem[],
  preview: string,
  label: string,
  tier: NickTier,
  tabs: NickTab[],
  styleId: string
): void {
  if (!preview.trim()) return;
  if (seen.has(preview)) return;
  seen.add(preview);
  out.push({
    id: nextId(),
    label,
    preview,
    tier,
    tabs,
    styleId,
  });
}

export function generateNickToolStyles(
  input: string,
  options: { symbolsEnabled: boolean }
): NickStyleItem[] {
  const raw = input.trim();
  if (!raw) return [];

  resetIds();
  const seen = new Set<string>();
  const out: NickStyleItem[] = [];

  const t = (styleId: string) => transformTextWithStyle(raw, styleId);

  for (const c of CURATED_POPULAR) {
    pushUnique(
      seen,
      out,
      `${c.pre}${t(c.styleId)}${c.post}`,
      c.label,
      c.tier,
      c.tabs,
      c.styleId
    );
  }

  for (const c of CURATED_TRENDING) {
    const hasEmoji = /[\u{1F300}-\u{1FAFF}]|[\u2600-\u26FF]/u.test(c.pre + c.post);
    if (!options.symbolsEnabled && hasEmoji) continue;
    pushUnique(
      seen,
      out,
      `${c.pre}${t(c.styleId)}${c.post}`,
      c.label,
      c.tier,
      c.tabs,
      c.styleId
    );
  }

  const gamerStyleIds = [
    "bold",
    "sansBold",
    "gothicBold",
    "mono",
    "double",
    "script",
    "wide",
    "italic",
  ];
  for (const sid of gamerStyleIds) {
    const styled = t(sid);
    for (let i = 0; i < GAMER_TEMPLATES.length; i += 1) {
      const preview = GAMER_TEMPLATES[i](styled);
      pushUnique(seen, out, preview, `Oyun Şablonu ${i + 1}`, "trending", ["oyun"], sid);
    }
  }

  const wraps: Wrap[] = [
    ...WRAPS_MINIMAL,
    ...(options.symbolsEnabled ? WRAPS_EMOJI : []),
  ];

  for (const sid of UNICODE_FONT_STYLE_IDS) {
    const styled = t(sid);
    pushUnique(
      seen,
      out,
      styled,
      `${sid} · düz`,
      "other",
      ["havali", "sekilli", "instagram", "oyun"],
      sid
    );

    for (let wi = 0; wi < wraps.length; wi += 1) {
      const w = wraps[wi];
      if (!options.symbolsEnabled && w.emoji) continue;
      const preview = applyWrap(styled, w);
      if (!w.pre && !w.post) continue;
      pushUnique(
        seen,
        out,
        preview,
        `${sid} · süs ${wi + 1}`,
        wi < 8 ? "trending" : "other",
        ["sekilli", "havali", "instagram"],
        sid
      );
    }
  }

  if (options.symbolsEnabled) {
    for (const sid of UNICODE_FONT_STYLE_IDS) {
      const styled = t(sid);
      for (let pi = 0; pi < PREFIX_ONLY.length; pi += 1) {
        const p = PREFIX_ONLY[pi];
        if (!options.symbolsEnabled && p.emoji) continue;
        pushUnique(
          seen,
          out,
          `${p.pre}${styled}`,
          `${sid} · önek ${pi + 1}`,
          "other",
          ["instagram", "havali", "sekilli"],
          sid
        );
      }
    }
  }

  for (const sid of UNICODE_FONT_STYLE_IDS) {
    const styled = t(sid);
    for (let si = 0; si < SEPARATORS.length; si += 1) {
      const sep = SEPARATORS[si];
      pushUnique(
        seen,
        out,
        joinWithSep(styled, sep),
        `${sid} · ayraç ${si + 1}`,
        "other",
        ["sekilli", "instagram", "havali"],
        sid
      );
    }
  }

  const mirrorPair: [string, string][] = [
    ["「", "」"],
    ["『", "』"],
    ["【", "】"],
    ["《", "》"],
  ];
  for (const sid of ["bold", "script", "sansBold", "double", "mono", "wide", "bubble", "italic"]) {
    const styled = t(sid);
    for (const [a, b] of mirrorPair) {
      pushUnique(seen, out, `${a}${styled}${b}`, `${sid} · çift`, "other", ["instagram", "sekilli"], sid);
    }
  }

  for (let i = 0; i < 120; i += 1) {
    const sid = UNICODE_FONT_STYLE_IDS[i % UNICODE_FONT_STYLE_IDS.length];
    const styled = t(sid);
    const pre = i % 7 === 0 ? "·" : i % 7 === 1 ? "•" : "";
    const post = i % 5 === 0 ? "·" : i % 5 === 2 ? "•" : "";
    const mid = i % 3 === 0 ? " " : "";
    pushUnique(
      seen,
      out,
      `${pre}${mid}${styled}${mid}${post}`,
      `${sid} · varyant ${i + 1}`,
      "other",
      ["havali"],
      sid
    );
  }

  const orderWeight = (item: NickStyleItem): number => {
    if (item.tier === "popular") return 0;
    if (item.tier === "trending") return 1;
    return 2;
  };

  out.sort((a, b) => {
    const d = orderWeight(a) - orderWeight(b);
    if (d !== 0) return d;
    return a.label.localeCompare(b.label, "tr");
  });

  return out;
}

export function nickMatchesFontFilter(item: NickStyleItem, filter: NickFontFilter): boolean {
  if (filter === "all") return true;
  if (filter === "popular") return item.tier === "popular";
  if (filter === "bold") return BOLD_IDS.has(item.styleId);
  if (filter === "italic") return ITALIC_IDS.has(item.styleId);
  if (filter === "fancy") return FANCY_IDS.has(item.styleId);
  return true;
}

export function nickMatchesTab(item: NickStyleItem, tab: NickTab | "all"): boolean {
  if (tab === "all") return true;
  return item.tabs.includes(tab);
}
