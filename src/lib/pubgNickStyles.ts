import { transformTextWithStyle } from "@/lib/textStyles";

export type PubgNickItem = {
  id: string;
  label: string;
  preview: string;
};

/** PUBG nick character limit. */
export const PUBG_NICK_LIMIT = 14;

/** Check if a nick is PUBG-compatible (≤ 14 chars). */
export function isPubgCompatible(nick: string): boolean {
  return Array.from(nick).length <= PUBG_NICK_LIMIT;
}

type PubgWrap = { label: string; styleId: string; pre: string; post: string };

const PUBG_CURATED: PubgWrap[] = [
  // — Pure font styles —
  { label: "Kalın", styleId: "bold", pre: "", post: "" },
  { label: "Sans Kalın", styleId: "sansBold", pre: "", post: "" },
  { label: "Kalın İtalik", styleId: "boldItalic", pre: "", post: "" },
  { label: "El Yazısı", styleId: "script", pre: "", post: "" },
  { label: "Zarif El Yazısı", styleId: "scriptLight", pre: "", post: "" },
  { label: "Gotik", styleId: "gothic", pre: "", post: "" },
  { label: "Kalın Gotik", styleId: "gothicBold", pre: "", post: "" },
  { label: "Çift Çizgili", styleId: "double", pre: "", post: "" },
  { label: "Monospace", styleId: "mono", pre: "", post: "" },
  { label: "Küçük Büyük Harf", styleId: "smallCaps", pre: "", post: "" },
  { label: "Geniş", styleId: "wide", pre: "", post: "" },
  { label: "İtalik", styleId: "italic", pre: "", post: "" },
  { label: "Baloncuk", styleId: "bubble", pre: "", post: "" },
  { label: "Kare", styleId: "square", pre: "", post: "" },
  { label: "Negatif Kare", styleId: "negativeSquared", pre: "", post: "" },
  { label: "Daire", styleId: "negativeCircled", pre: "", post: "" },
  { label: "Sans İtalik", styleId: "sansItalic", pre: "", post: "" },
  { label: "Sans Kalın İtalik", styleId: "sansBoldItalic", pre: "", post: "" },

  // — PUBG Gamer wraps (symbol + font combos) —
  { label: "Kanatlı Nick", styleId: "script", pre: "꧁", post: "꧂" },
  { label: "Köşeli Nick", styleId: "sansBold", pre: "『", post: "』" },
  { label: "Yıldız Nick", styleId: "bold", pre: "★", post: "★" },
  { label: "Çarpı Nick", styleId: "bold", pre: "乂", post: "乂" },
  { label: "Şimşek Nick", styleId: "sansBold", pre: "⚡", post: "⚡" },
  { label: "Taçlı Nick", styleId: "sansBold", pre: "♛", post: "♛" },
  { label: "xX Gamer", styleId: "bold", pre: "xX_", post: "_Xx" },
  { label: "Katakana Son", styleId: "sansBold", pre: "", post: "ツ" },
  { label: "Kanji Son", styleId: "sansBold", pre: "", post: "么" },
  { label: "Gotik Kanatlı", styleId: "gothicBold", pre: "꧁", post: "꧂" },
  { label: "Parantez Nick", styleId: "italic", pre: "【", post: "】" },
  { label: "Çerçeve Nick", styleId: "scriptLight", pre: "「", post: "」" },
  { label: "Çift Yıldız", styleId: "sansItalic", pre: "✦", post: "✦" },
  { label: "Pro Çizgi", styleId: "mono", pre: "▪", post: "▪" },
  { label: "Ninja Çizgi", styleId: "mono", pre: "丨", post: "丨" },
  { label: "Klan Nick", styleId: "gothicBold", pre: "「", post: "」" },
  { label: "Soyut Nick", styleId: "gothic", pre: "༺", post: "༻" },
  { label: "Yıldız Şerit", styleId: "script", pre: "★彡", post: "彡★" },
  { label: "Free Fire", styleId: "double", pre: "༒", post: "༒" },
  { label: "E-spor Nick", styleId: "sansBoldItalic", pre: "「", post: "」" },
  { label: "PUBG Kısa", styleId: "sansBold", pre: "々", post: "々" },
  { label: "Bar Nick", styleId: "negativeSquared", pre: "▌", post: "▐" },
  { label: "Ok İşaretli", styleId: "italic", pre: "»", post: "«" },
  { label: "Minimal Nokta", styleId: "bold", pre: "·", post: "·" },
  { label: "Çift Süs", styleId: "double", pre: "『", post: "』" },
  { label: "Gamer Çerçeve", styleId: "gothicBold", pre: "×", post: "×" },
  { label: "Havalı Köşe", styleId: "bold", pre: "╰", post: "╯" },
  { label: "Sert Çizgi", styleId: "sansBold", pre: "░", post: "░" },
  { label: "Minimal Ok", styleId: "sans", pre: "▸", post: "◂" },
];

/** Ready-made static nicknames for PUBG -- displayed at bottom. */
export const PUBG_READY_NICKS: string[] = [
  "꧁ᴋɪʟʟᴇʀ꧂",
  "★𝗞𝗿𝗮𝗹★",
  "乂𝕊𝕟𝕚𝕡𝕖𝕣乂",
  "『𝓗𝓾𝓷𝓽𝓮𝓻』",
  "⚡𝗦𝗮𝘃𝗮𝘀𝗰𝗶⚡",
  "♛𝐁𝐨𝐬𝐬♛",
  "∂αякηєss",
  "꧁𝕯𝖊𝖘𝖙𝖎𝖓𝖞꧂",
  "丨𝚃𝚘𝚡𝚒𝚌丨",
  "「𝒮𝒽𝒶𝒹ℴ𝓌」",
  "✦𝗩𝗶𝗽𝗲𝗿✦",
  "ᴠᴇɴᴏᴍツ",
  "▪𝙶𝚑𝚘𝚜𝚝▪",
  "々𝐋𝐞𝐠𝐞𝐧𝐝々",
  "»𝑃ℎ𝑎𝑛𝑡𝑜𝑚«",
];

/** Symbols that users can tap to insert into input. */
export const PUBG_SYMBOLS: string[] = [
  "꧁", "꧂", "么", "ツ", "亗", "メ", "×", "乡", "王",
  "★", "☆", "♛", "♚", "⚡", "✦", "✧", "『", "』",
  "【", "】", "「", "」", "乂", "々", "༒", "彡", "丨",
  "▸", "◂", "▪", "░", "╰", "╯", "·", "•",
];

/** Invisible zero-width space character. */
export const INVISIBLE_CHAR = "\u200B";

let _id = 0;
function resetId() { _id = 0; }
function nextPubgId() { return `pubg-${++_id}`; }

/**
 * Generate PUBG-focused nick style variations.
 * Returns 40-50 unique items.
 */
export function generatePubgNickStyles(input: string): PubgNickItem[] {
  const raw = input.trim();
  if (!raw) return [];

  resetId();
  const seen = new Set<string>();
  const out: PubgNickItem[] = [];

  const t = (sid: string) => transformTextWithStyle(raw, sid);

  for (const c of PUBG_CURATED) {
    const preview = `${c.pre}${t(c.styleId)}${c.post}`;
    if (seen.has(preview) || !preview.trim()) continue;
    seen.add(preview);
    out.push({ id: nextPubgId(), label: c.label, preview });
  }

  return out;
}
