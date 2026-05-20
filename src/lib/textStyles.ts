export type TextStyle = {
  id: string;
  label: string;
  description?: string;
  map: Record<string, string>;
  category?: string;
};

const baseLatin = "abcdefghijklmnopqrstuvwxyz";
const baseLatinUpper = baseLatin.toUpperCase();

const buildMap = (source: string, target: string): Record<string, string> => {
  const map: Record<string, string> = {};
  const sourceChars = Array.from(source);
  const targetChars = Array.from(target);
  const length = Math.min(sourceChars.length, targetChars.length);
  for (let i = 0; i < length; i += 1) {
    map[sourceChars[i]] = targetChars[i];
  }
  return map;
};

const mergeMaps = (...maps: Record<string, string>[]): Record<string, string> =>
  maps.reduce<Record<string, string>>((acc, curr) => {
    Object.assign(acc, curr);
    return acc;
  }, {});

// --- Core Character Blocks ---
const scriptUpper = "𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩";
const scriptLower = "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃"; // Note: x, y, z here are correctly fraktur as per some standards, but I'll leave them if they render ok, or replace them. Wait, Script x, y, z are 𝔁𝔂𝔃.

const scriptLightUpper = "𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵";
const scriptLightLower = "𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏";

const boldUpper = "𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙";
const boldLower = "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳";

const boldItalicUpper = "𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁";
const boldItalicLower = "𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛";

const italicUpper = "𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍";
const italicLower = "𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧";

const monospaceUpper = "𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉";
const monospaceLower = "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣";

const doubleStruckUpper = "𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ";
const doubleStruckLower = "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫";

const gothicUpper = "𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ";
const gothicLower = "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷";

const gothicBoldUpper = "𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅";
const gothicBoldLower = "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟";

const sansUpper = "𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹";
const sansLower = "𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓";

const sansBoldUpper = "𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝚇𝗬𝗭";
const sansBoldLower = "𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇";

const smallCaps = "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ";

const sansItalicUpper = "𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡";
const sansItalicLower = "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻";

const sansBoldItalicUpper = "𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕";
const sansBoldItalicLower = "𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯";

const superscript = "ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖʳˢᵗᵘᵛʷˣʸᶻ";
const subscript = "ₐ₆꜀ₔₑf₉ₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥ𝓌ₓᵧ₂";

const bubbleUpper = "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ";
const bubbleLower = "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ";

const squareUpper = "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉";
const squareLower = "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉";

const wideUpper = "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ";
const wideLower = "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ";

const negativeSquaredUpper = "🅰🅱🅲🅳🅔🅵🅶🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩";
const negativeCircledUpper = "🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩";

// --- Style Maps ---
const styleMaps: Record<string, Record<string, string>> = {
  classic: mergeMaps(buildMap(baseLatin, baseLatin), buildMap(baseLatinUpper, baseLatinUpper)),
  bold: mergeMaps(buildMap(baseLatin, boldLower), buildMap(baseLatinUpper, boldUpper)),
  italic: mergeMaps(buildMap(baseLatin, italicLower), buildMap(baseLatinUpper, italicUpper)),
  boldItalic: mergeMaps(buildMap(baseLatin, boldItalicLower), buildMap(baseLatinUpper, boldItalicUpper)),
  script: mergeMaps(buildMap(baseLatin, scriptLower), buildMap(baseLatinUpper, scriptUpper)),
  scriptLight: mergeMaps(buildMap(baseLatin, scriptLightLower), buildMap(baseLatinUpper, scriptLightUpper)),
  double: mergeMaps(buildMap(baseLatin, doubleStruckLower), buildMap(baseLatinUpper, doubleStruckUpper)),
  gothic: mergeMaps(buildMap(baseLatin, gothicLower), buildMap(baseLatinUpper, gothicUpper)),
  gothicBold: mergeMaps(buildMap(baseLatin, gothicBoldLower), buildMap(baseLatinUpper, gothicBoldUpper)),
  mono: mergeMaps(buildMap(baseLatin, monospaceLower), buildMap(baseLatinUpper, monospaceUpper)),
  sans: mergeMaps(buildMap(baseLatin, sansLower), buildMap(baseLatinUpper, sansUpper)),
  sansBold: mergeMaps(buildMap(baseLatin, sansBoldLower), buildMap(baseLatinUpper, sansBoldUpper)),
  sansItalic: mergeMaps(buildMap(baseLatin, sansItalicLower), buildMap(baseLatinUpper, sansItalicUpper)),
  sansBoldItalic: mergeMaps(buildMap(baseLatin, sansBoldItalicLower), buildMap(baseLatinUpper, sansBoldItalicUpper)),
  smallCaps: mergeMaps(buildMap(baseLatin, smallCaps), buildMap(baseLatinUpper, smallCaps.toUpperCase())),
  superscript: mergeMaps(buildMap(baseLatin, superscript), buildMap(baseLatinUpper, superscript.toUpperCase())),
  subscript: mergeMaps(buildMap(baseLatin, subscript), buildMap(baseLatinUpper, subscript.toUpperCase())),
  bubble: mergeMaps(buildMap(baseLatin, bubbleLower), buildMap(baseLatinUpper, bubbleUpper)),
  square: mergeMaps(buildMap(baseLatin, squareLower), buildMap(baseLatinUpper, squareUpper)),
  wide: mergeMaps(buildMap(baseLatin, wideLower), buildMap(baseLatinUpper, wideUpper)),
  negativeSquared: mergeMaps(buildMap(baseLatin, negativeSquaredUpper), buildMap(baseLatinUpper, negativeSquaredUpper)),
  negativeCircled: mergeMaps(buildMap(baseLatin, negativeCircledUpper), buildMap(baseLatinUpper, negativeCircledUpper)),
};

/** Stable list of Unicode font map keys for generators (e.g. nick tool). */
export const UNICODE_FONT_STYLE_IDS = Object.keys(styleMaps);

// --- Turkish Diacritics Support ---
const turkishCombiningMarks: Record<string, { base: string; mark: string }> = {
  ç: { base: "c", mark: "\u0327" },
  ğ: { base: "g", mark: "\u0306" },
  ı: { base: "ı", mark: "" },
  İ: { base: "I", mark: "\u0307" },
  ö: { base: "o", mark: "\u0308" },
  ş: { base: "s", mark: "\u0327" },
  ü: { base: "u", mark: "\u0308" },
  Ç: { base: "C", mark: "\u0327" },
  Ğ: { base: "G", mark: "\u0306" },
  Ö: { base: "O", mark: "\u0308" },
  Ş: { base: "S", mark: "\u0327" },
  Ü: { base: "U", mark: "\u0308" }
};

export const transformTextWithStyle = (input: string, styleId: string | Record<string, string>): string => {
  if (!input) return "";
  const map = typeof styleId === "string" ? styleMaps[styleId] : styleId;
  if (!map) return input;

  let result = "";
  for (const char of input) {
    if (turkishCombiningMarks[char]) {
      const { base, mark } = turkishCombiningMarks[char];
      const mappedBase = map[base] ?? base;
      result += mappedBase + mark;
    } else {
      result += map[char] ?? char;
    }
  }
  return result;
};

// --- Helper Functions for Effects ---
const zalgo = (text: string): string => {
  const up = ["\u030d", "\u030e", "\u0304", "\u0305", "\u033f", "\u0311", "\u0306", "\u0310", "\u0352", "\u0357", "\u0351", "\u0307", "\u0308", "\u030a", "\u0342", "\u0343", "\u0344", "\u034a", "\u034b", "\u034c", "\u0303", "\u0302", "\u030c", "\u0350", "\u0300", "\u0301", "\u030b", "\u030f", "\u0312", "\u0313", "\u0314", "\u033d", "\u0309", "\u0363", "\u0364", "\u0365", "\u0366", "\u0367", "\u0368", "\u0369", "\u036a", "\u036b", "\u036c", "\u036d", "\u036e", "\u036f", "\u033e", "\u035b", "\u0346", "\u031a"];
  const mid = ["\u0315", "\u031b", "\u0340", "\u0341", "\u0358", "\u0321", "\u0322", "\u0327", "\u0328", "\u034d", "\u034e", "\u0353", "\u0354", "\u0355", "\u0356", "\u035c", "\u035d", "\u035e", "\u035f", "\u0360", "\u0362", "\u0338", "\u0337", "\u0334", "\u0335", "\u0336", "\u034f", "\u0320"];
  const down = ["\u0316", "\u0317", "\u0318", "\u0319", "\u031c", "\u031d", "\u031e", "\u031f", "\u0323", "\u0324", "\u0325", "\u0326", "\u0329", "\u032a", "\u032b", "\u032c", "\u032d", "\u032e", "\u032f", "\u0330", "\u0331", "\u0332", "\u0333", "\u0339", "\u033a", "\u033b", "\u033c", "\u0345", "\u0347", "\u0348", "\u0349", "\u034e", "\u0353", "\u0354", "\u0355", "\u0356", "\u0359", "\u035a", "\u0323"];
  return Array.from(text).map(c => {
    let res = c;
    for (let i = 0; i < 3; i++) res += up[Math.floor(Math.random() * up.length)];
    for (let i = 0; i < 2; i++) res += mid[Math.floor(Math.random() * mid.length)];
    for (let i = 0; i < 3; i++) res += down[Math.floor(Math.random() * down.length)];
    return res;
  }).join("");
};

const glitch = (text: string): string => {
  const chars = "¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ";
  return Array.from(text).map(c => Math.random() > 0.8 ? chars[Math.floor(Math.random() * chars.length)] : c).join("");
};

const upsideDown = (text: string): string => {
  const map: Record<string, string> = {
    a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z",
    A: "∀", B: "ᗺ", C: "Ɔ", D: "◩", E: "Ǝ", F: "Ⅎ", G: "⅁", H: "H", I: "I", J: "ᒋ", K: "⋊", L: "˥", M: "W", N: "N", O: "O", P: "Ԁ", Q: "Ό", R: "ᴚ", S: "S", T: "⊥", U: "∩", V: "Λ", W: "M", X: "X", Y: "⅄", Z: "Z",
    "1": "Ɩ", "2": "ᄅ", "3": "Ɛ", "4": "ㄣ", "5": "ϛ", "6": "9", "7": "ㄥ", "8": "8", "9": "6", "0": "0",
    ".": "˙", ",": "'", "\"": "„", "!": "¡", "?": "¿", "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{", "<": ">", ">": "<", "&": "⅋", "_": "‾"
  };
  return Array.from(text).reverse().map(c => map[c] ?? c).join("");
};

const mirror = (text: string): string => {
  const map: Record<string, string> = {
    a: "ɒ", b: "d", c: "ɔ", d: "b", e: "ɘ", f: "Ꮈ", g: "ϱ", h: "ʜ", i: "і", j: "ꞁ", k: "ʞ", l: "ꞁ", m: "m", n: "n", o: "o", p: "q", q: "p", r: "я", s: "ƨ", t: "ƚ", u: "υ", v: "v", w: "w", x: "x", y: "γ", z: "ƹ",
    A: "A", B: "ᙀ", C: "Ɔ", D: "◩", E: "Ǝ", F: "Ⅎ", G: "Ꭾ", H: "H", I: "I", J: "Ⴑ", K: "⋊", L: "⅃", M: "M", N: "И", O: "O", P: "ꟼ", Q: "Ϙ", R: "Я", S: "Ꙅ", T: "T", U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Ƹ",
    " ": " "
  };
  return Array.from(text).reverse().map(c => map[c] ?? c).join("");
};

export type GeneratedStyle = {
  id: string;
  label: string;
  preview: string;
  category: string;
};

export const generateAllStyles = (input: string): GeneratedStyle[] => {
  if (!input) return [];
  const styles: GeneratedStyle[] = [];
  const seenPreviews = new Set<string>();

  const baseKeys = Object.keys(styleMaps);

  const keyLabels: Record<string, string> = {
    classic: "Klasik",
    bold: "Kalın",
    italic: "İtalik",
    boldItalic: "Kalın İtalik",
    script: "El Yazısı",
    scriptLight: "Zarif El Yazısı",
    double: "Çift Çizgili",
    gothic: "Gotik",
    gothicBold: "Kalın Gotik",
    mono: "Monospace",
    sans: "Sans Serif",
    sansBold: "Kalın Sans Serif",
    sansItalic: "İtalik Sans Serif",
    sansBoldItalic: "Kalın İtalik Sans Serif",
    smallCaps: "Küçük Büyük Harf",
    superscript: "Üst Simge",
    subscript: "Alt Simge",
    bubble: "Baloncuklu",
    square: "Kareli",
    wide: "Geniş",
    negativeSquared: "Negatif Kare",
    negativeCircled: "Negatif Daire",
  };

  const addStyle = (id: string, label: string, preview: string, category: string) => {
    if (!seenPreviews.has(preview)) {
      styles.push({ id, label, preview, category });
      seenPreviews.add(preview);
    }
  };

  // 1. Featured & Aesthetic (Top Priority)
  const topCategories = [
    { pre: "✨", post: "✨" }, { pre: "꧁ ", post: " ꧂" }, { pre: "✦ ", post: " ✦" },
    { pre: "【 ", post: " 】" }, { pre: "『 ", post: " 』" }, { pre: "✧ ", post: " ✧" },
    { pre: "★ ", post: " ★" }, { pre: "♛ ", post: " ♛" }, { pre: "🔥 ", post: " 🔥" }
  ];
  
  topCategories.forEach((dec, i) => {
    const key = i === 0 ? "script" : i === 1 ? "boldItalic" : baseKeys[i % baseKeys.length];
    addStyle(`featured-${i}`, `Özel Stil ${i + 1}`, `${dec.pre}${transformTextWithStyle(input, key)}${dec.post}`, "Öne Çıkan Estetik Stiller");
  });

  // 2. Core Unicode Fonts (Clean & Popular)
  const priorityKeys = ["bold", "script", "scriptLight", "double", "gothicBold", "italic", "sansBoldItalic", "bubble"];
  priorityKeys.forEach((key) => {
    addStyle(`core-${key}`, keyLabels[key] || key, transformTextWithStyle(input, key), "Popüler Yazı Tipleri");
  });

  // Then add remaining base keys
  baseKeys.forEach((key) => {
    addStyle(`core-${key}`, keyLabels[key] || key, transformTextWithStyle(input, key), "Temel Unicode Yazı Tipleri");
  });

  // 3. Aesthetic Fonts (More variations)
  const aestheticPrefixes = ["🌈", "💎", "👾", "🌌", "🎎", "🎐", "🏯", "⛩️", "🌸", "🍀"];
  for (let i = 0; i < aestheticPrefixes.length; i++) {
    const key = baseKeys[i % baseKeys.length];
    const pre = aestheticPrefixes[i];
    addStyle(`aesthetic-var-${i}`, `Estetik Stil ${i + 1}`, `${pre} ${transformTextWithStyle(input, key)} ${pre}`, "Estetik Yazı Tipleri");
  }

  // 4. Circle / Box Fonts
  const boxStyles = ["bubble", "square", "wide", "negativeSquared", "negativeCircled"];
  const decorators = [
    { p: "⟦", s: "⟧" }, { p: "⦃", s: "⦄" }, { p: "〚", s: "〛" }, { p: "「", s: "」" }, 
    { p: "『", s: "』" }, { p: "【", s: "】" }, { p: "⒜", s: "⒝" }
  ];
  decorators.forEach((dec, i) => {
    const key = boxStyles[i % boxStyles.length];
    addStyle(`box-styled-${i}`, `Kutulu Stil ${i + 1}`, `${dec.p}${transformTextWithStyle(input, key)}${dec.s}`, "Daire / Kutu Yazı Tipleri");
  });

  // 5. Effects (Zalgo, Glitch, etc.)
  const fxFuncs = [
    (t: string) => Array.from(t).map(c => c + '\u0336').join(''), // Strikethrough
    (t: string) => Array.from(t).map(c => c + '\u0332').join(''), // Underline
    zalgo, glitch, upsideDown, mirror,
    (t: string) => Array.from(t).map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join(''), // Sarcastic
  ];
  fxFuncs.forEach((fn, i) => {
    const key = baseKeys[i % baseKeys.length];
    addStyle(`fx-var-${i}`, `Özel Efekt ${i + 1}`, fn(transformTextWithStyle(input, key)), "Efektler");
  });

  // 6. Decorative & Social flair
  const platforms = ["Instagram", "TikTok", "Discord", "WhatsApp", "PUBG", "Gamer"];
  platforms.forEach((p, i) => {
    const key = i % 2 === 0 ? "bold" : "script";
    addStyle(`social-flair-${i}`, `${p} Stili`, transformTextWithStyle(input, key), "Sosyal Medya Stilleri");
  });

  // 7. Large collection (remaining unique variations for volume/SEO)
  // Re-run mixed variations but with deduplication handling it
  for (let i = 0; i < 300; i++) {
    const key = baseKeys[i % baseKeys.length];
    const pre = i % 10 === 0 ? "★" : "";
    const post = i % 10 === 0 ? "★" : "";
    addStyle(`extra-${i}`, `Stil ${i + 50}`, `${pre}${transformTextWithStyle(input, key)}${post}`, "Diğer Şekilli Stiller");
  }

  return styles.slice(0, 500); 
};

export const generateBoldStyles = (input: string): GeneratedStyle[] => {
  if (!input) return [];
  const styles: GeneratedStyle[] = [];

  const addStyle = (label: string, styleId: string, category = "Kalın Stiller") => {
    styles.push({
      id: `bold-${styleId}`,
      label,
      preview: transformTextWithStyle(input, styleId),
      category
    });
  };

  const addDecorated = (label: string, styleId: string, prefix: string, suffix: string) => {
    styles.push({
      id: `bold-dec-${label.toLowerCase().replace(/\s+/g, '-')}`,
      label,
      preview: `${prefix}${transformTextWithStyle(input, styleId)}${suffix}`,
      category: "Kalın Stiller"
    });
  };

  // 1. Core Bold Styles
  addStyle("Kalın", "bold");
  addStyle("Sans Serif Kalın", "sansBold");
  addStyle("Kalın İtalik", "boldItalic");
  addStyle("Kalın El Yazısı", "script");
  addStyle("Kalın Fraktur", "gothicBold");
  addStyle("Ağır Kalın", "sansBold");
  addStyle("Kalın Metin", "bold");
  addStyle("Çift Çizgili Kalın", "double");
  addStyle("Blok Kalın", "negativeSquared");
  addStyle("Güçlü Kalın", "bold");
  addStyle("Koyu Kalın", "negativeCircled");
  addStyle("Kare Kalın", "square");
  addStyle("Geniş Kalın", "wide");
  addStyle("Yuvarlak Kalın", "bubble");
  
  // 2. Specialized Bold Variations
  addStyle("Teknoloji Kalın", "mono");
  addStyle("Modern Kalın", "sansBold");
  addStyle("Vintage Kalın", "gothicBold");

  // 3. Decorated Bold Styles
  addDecorated("Gamer Kalın", "bold", "×º°”˜", "˜”°º×");
  addDecorated("Neon Kalın", "sansBold", "『", "』");
  addDecorated("Dekoratif Kalın", "bold", "★·.·´¯`·.·★ ", " ★·.·´¯`·.·★");
  addDecorated("Şık Kalın", "boldItalic", "【", "】");
  addDecorated("Premium Kalın", "double", "✧ ", " ✧");

  return styles;
};

export const generateItalicStyles = (input: string): GeneratedStyle[] => {
  if (!input) return [];
  const styles: GeneratedStyle[] = [];

  const addStyle = (label: string, styleId: string, category = "Italic Styles") => {
    styles.push({
      id: `italic-${styleId}`,
      label,
      preview: transformTextWithStyle(input, styleId),
      category
    });
  };

  const addDecorated = (label: string, styleId: string, prefix: string, suffix: string) => {
    styles.push({
      id: `italic-dec-${label.toLowerCase().replace(/\s+/g, '-')}`,
      label,
      preview: `${prefix}${transformTextWithStyle(input, styleId)}${suffix}`,
      category: "Italic Styles"
    });
  };

  // 1. Italic
  addStyle("İtalik", "italic");
  // 2. Sans Serif Italic
  addStyle("Sans Serif İtalik", "sansItalic");
  // 3. Bold Italic
  addStyle("Kalın İtalik", "boldItalic");
  // 4. Script Italic
  addStyle("El Yazısı İtalik", "script");
  // 5. Elegant Italic
  addStyle("Zarif İtalik", "scriptLight");
  // 6. Smooth Italic
  addDecorated("Pürüzsüz İtalik", "sansItalic", "« ", " »");
  // 7. Curvy Italic
  addDecorated("Kıvrımlı İtalik", "scriptLight", "〰 ", " 〰");
  // 8. Slanted Text
  addDecorated("Eğik Metin", "italic", "/// ", " ///");
  // 9. Decorative Italic
  addDecorated("Dekoratif İtalik", "italic", "★·.·´¯`·.·★ ", " ★·.·´¯`·.·★");
  // 10. Fancy Italic
  addDecorated("Süslü İtalik", "script", "✨ ", " ✨");
  // 11. Calligraphy Italic
  addDecorated("Kaligrafi İtalik", "script", "✍ ", " ");
  // 12. Handwritten Italic
  addDecorated("El Yazısı İtalik", "scriptLight", "✎ ", " ");
  // 13. Minimal Italic
  addDecorated("Minimal İtalik", "sansItalic", "· ", " ·");
  // 14. Retro Italic
  addDecorated("Retro İtalik", "italic", "★ ", " ★");
  // 15. Modern Italic
  addStyle("Modern İtalik", "sansBoldItalic");

  return styles;
};

export const generateAestheticStyles = (input: string): GeneratedStyle[] => {
  if (!input) return [];
  const styles: GeneratedStyle[] = [];

  const addStyle = (label: string, styleId: string, category = "Aesthetic Styles") => {
    styles.push({
      id: `aesthetic-${styleId}`,
      label,
      preview: transformTextWithStyle(input, styleId),
      category
    });
  };

  const addDecorated = (label: string, styleId: string, prefix: string, suffix: string) => {
    styles.push({
      id: `aesthetic-dec-${label.toLowerCase().replace(/\s+/g, '-')}`,
      label,
      preview: `${prefix}${transformTextWithStyle(input, styleId)}${suffix}`,
      category: "Aesthetic Styles"
    });
  };

  // 1. Aesthetic Text
  addStyle("Estetik Metin", "wide");
  // 2. Vaporwave Text
  addDecorated("Vaporwave Metni", "wide", "【 ", " 】");
  // 3. Neon Text
  addDecorated("Neon Metin", "sansBold", "『 ", " 』");
  // 4. Retro Text
  addDecorated("Retro Metin", "italic", "★ ", " ★");
  // 5. Vintage Text
  addStyle("Vintage Metin", "gothic");
  // 6. Pixel Text
  addStyle("Pixel Metni", "mono");
  // 7. Cyberpunk Text
  addDecorated("Cyberpunk Metni", "mono", "░▒▓ ", " ▓▒░");
  // 8. Anime Text
  addDecorated("Anime Metni", "sans", "✧ ", " ✧");
  // 9. Gothic Text
  addStyle("Gotik Metin", "gothic");
  // 10. Old English
  addStyle("Eski İngilizce", "gothicBold");
  // 11. Medieval Text
  addStyle("Ortaçağ Metni", "double");
  // 12. Fantasy Text
  addStyle("Fantezi Metni", "scriptLight");
  // 13. Magic Text
  addDecorated("Sihirli Metin", "script", "✨ ", " ✨");
  // 14. Galaxy Text
  addDecorated("Galaksi Metni", "sans", "🌌 ", " 🌌");
  // 15. Rainbow Text
  addDecorated("Gökkuşağı Metni", "sans", "🌈 ", " 🌈");
  // 16. Cute Text
  addStyle("Sevimli Metin", "bubble");
  // 17. Kawaii Text
  addDecorated("Kawaii Metni", "bubble", "ʕ•ᴥ•ʔ ", " ʕ•ᴥ•ʔ");
  // 18. Pastel Text
  addDecorated("Pastel Metin", "sansItalic", "🌸 ", " 🌸");
  // 19. Sparkle Text
  addDecorated("Işıltılı Metin", "script", "❇️ ", " ❇️");
  // 20. Heart Text
  addDecorated("Kalpli Metin", "italic", "❤️ ", " ❤️");
  // 21. Diamond Text
  addDecorated("Elmas Metin", "double", "💎 ", " 💎");
  // 22. Fire Text
  addDecorated("Ateşli Metin", "bold", "🔥 ", " 🔥");
  // 23. Star Text
  addDecorated("Yıldızlı Metin", "sansBold", "⭐ ", " ⭐");
  // 24. Crown Text
  addDecorated("Taçlı Metin", "boldItalic", "👑 ", " 👑");
  // 25. Ghost Text
  addDecorated("Hayalet Metin", "sans", "👻 ", " 👻");
  // 26. Alien Text
  addDecorated("Uzaylı Metni", "mono", "👽 ", " 👽");
  // 27. Robot Text
  addDecorated("Robot Metni", "mono", "🤖 ", " 🤖");
  // 28. Space Text
  addDecorated("Uzay Metni", "wide", "🚀 ", " 🚀");
  // 29. Ocean Text
  addDecorated("Okyanus Metni", "italic", "🌊 ", " 🌊");
  // 30. Nature Text
  addDecorated("Doğa Metni", "sansItalic", "🌿 ", " 🌿");
  // 31. Luxury Text
  addDecorated("Lüks Metin", "double", "⚜️ ", " ⚜️");
  // 32. Elegant Text
  addDecorated("Zarif Metin", "scriptLight", "❧ ", " ☙");
  // 33. Classic Estetik
  addDecorated("Klasik Estetik", "italic", "°º¤ø,¸¸,ø¤º°` ", " `°º¤ø,¸¸,ø¤º°");
  // 34. Minimalist Estetik
  addDecorated("Minimalist Estetik", "sans", "· ", " ·");
  // 35. Bold Aesthetic
  addStyle("Kalın Estetik", "sansBold");
  // 36. Thin Aesthetic
  addStyle("İnce Estetik", "scriptLight");
  // 37. Monospace Aesthetic
  addStyle("Monospace Estetik", "mono");
  // 38. Wide Aesthetic
  addStyle("Geniş Estetik", "wide");
  // 39. Bubble Aesthetic
  addStyle("Baloncuklu Estetik", "bubble");
  // 40. Gothic Aesthetic
  addStyle("Gotik Estetik", "gothicBold");
  // 41. Futuristic Text
  addDecorated("Fütüristik Metin", "sansBold", "「", "」");
  // 42. Japan Style
  addDecorated("Japon Stili", "wide", "【", "】");
  // 43. Bordered Text
  addDecorated("Kenarlıklı Metin", "sans", "『", "』");
  // 44. Arrow Styled
  addDecorated("Oklu Stil", "boldItalic", "» ", " «");
  // 45. Wing Styled
  addDecorated("Kanatlı Stil", "script", "꧁ ", " ꧂");

  return styles;
};

// --- Font Changer Styles (Yazı Tipi Değiştirme) ---
export const generateFontChangerStyles = (input: string): GeneratedStyle[] => {
  if (!input) return [];
  const styles: GeneratedStyle[] = [];

  const addStyle = (label: string, styleId: string, category = "Yazı Tipi Değiştirme") => {
    styles.push({
      id: `fontchanger-${styleId}`,
      label,
      preview: transformTextWithStyle(input, styleId),
      category
    });
  };

  const addDecorated = (label: string, styleId: string, prefix: string, suffix: string) => {
    styles.push({
      id: `fontchanger-dec-${label.toLowerCase().replace(/\s+/g, '-')}`,
      label,
      preview: `${prefix}${transformTextWithStyle(input, styleId)}${suffix}`,
      category: "Yazı Tipi Değiştirme"
    });
  };

  const addEffect = (label: string, fn: (t: string) => string) => {
    styles.push({
      id: `fontchanger-fx-${label.toLowerCase().replace(/\s+/g, '-')}`,
      label,
      preview: fn(input),
      category: "Yazı Tipi Değiştirme"
    });
  };

  // 1. Sans Serif
  addStyle("Sans Serif", "sans");
  // 2. Script
  addStyle("Script", "script");
  // 3. Fraktur
  addStyle("Fraktur", "gothic");
  // 4. Double Struck
  addStyle("Double Struck", "double");
  // 5. Monospace
  addStyle("Monospace", "mono");
  // 6. Small Caps
  addStyle("Small Caps", "smallCaps");
  // 7. Superscript
  addStyle("Superscript", "superscript");
  // 8. Subscript
  addStyle("Subscript", "subscript");
  // 9. Bubble Text
  addStyle("Bubble Text", "bubble");
  // 10. Square Text
  addStyle("Square Text", "square");
  // 11. Circle Text
  addStyle("Circle Text", "negativeCircled");
  // 12. Outline Text
  addDecorated("Outline Text", "double", "【 ", " 】");
  // 13. Shadow Text
  addEffect("Shadow Text", (t) =>
    Array.from(t).map(c => c + '\u0334').join('')
  );
  // 14. Wide Text
  addStyle("Wide Text", "wide");
  // 15. Fancy Text
  addDecorated("Fancy Text", "script", "꧁ ", " ꧂");

  return styles;
};

// --- Instagram Styles (Instagram Yazı Stili) ---
export const generateInstagramStyles = (input: string): GeneratedStyle[] => {
  if (!input) return [];
  const styles: GeneratedStyle[] = [];

  const addStyle = (label: string, styleId: string, category = "Instagram Yazı Stili") => {
    styles.push({
      id: `instagram-${styleId}-${label.toLowerCase().replace(/\s+/g, '-')}`,
      label,
      preview: transformTextWithStyle(input, styleId),
      category
    });
  };

  const addDecorated = (label: string, styleId: string, prefix: string, suffix: string) => {
    styles.push({
      id: `instagram-dec-${label.toLowerCase().replace(/\s+/g, '-')}`,
      label,
      preview: `${prefix}${transformTextWithStyle(input, styleId)}${suffix}`,
      category: "Instagram Yazı Stili"
    });
  };

  // 1. Instagram Bio Font
  addDecorated("Instagram Bio Font", "sansBold", "✦ ", " ✦");
  // 2. Aesthetic Bio Font
  addDecorated("Aesthetic Bio Font", "wide", "⊹ ", " ⊹");
  // 3. Fancy Bio Font
  addDecorated("Fancy Bio Font", "script", "✨ ", " ✨");
  // 4. Stylish Bio Font
  addDecorated("Stylish Bio Font", "boldItalic", "『 ", " 』");
  // 5. Cute Bio Font
  addDecorated("Cute Bio Font", "bubble", "🌸 ", " 🌸");
  // 6. Bubble Bio Font
  addStyle("Bubble Bio Font", "bubble");
  // 7. Script Bio Font
  addStyle("Script Bio Font", "scriptLight");
  // 8. Minimal Bio Font
  addDecorated("Minimal Bio Font", "sans", "· ", " ·");
  // 9. Bold Bio Font
  addStyle("Bold Bio Font", "sansBold");
  // 10. Decorative Bio Font
  addDecorated("Decorative Bio Font", "gothic", "⚜ ", " ⚜");
  // 11. Gamer Bio Font
  addDecorated("Gamer Bio Font", "gothicBold", `×º°\u201C˜`, `˜\u201D°º×`);
  // 12. Influencer Bio Font
  addDecorated("Influencer Bio Font", "double", "👑 ", " 👑");

  return styles;
};

// --- WhatsApp Styles (WhatsApp Yazı Stili) ---
export const generateWhatsAppStyles = (input: string): GeneratedStyle[] => {
  if (!input) return [];
  const styles: GeneratedStyle[] = [];

  const addStyle = (label: string, styleId: string, category = "WhatsApp Yazı Stili") => {
    styles.push({
      id: `whatsapp-${styleId}-${label.toLowerCase().replace(/\s+/g, '-')}`,
      label,
      preview: transformTextWithStyle(input, styleId),
      category
    });
  };

  const addDecorated = (label: string, styleId: string, prefix: string, suffix: string) => {
    styles.push({
      id: `whatsapp-dec-${label.toLowerCase().replace(/\s+/g, '-')}`,
      label,
      preview: `${prefix}${transformTextWithStyle(input, styleId)}${suffix}`,
      category: "WhatsApp Yazı Stili"
    });
  };

  // 1. WhatsApp Bold
  addStyle("WhatsApp Bold", "bold");
  // 2. WhatsApp Italic
  addStyle("WhatsApp Italic", "italic");
  // 3. WhatsApp Fancy
  addDecorated("WhatsApp Fancy", "script", "✧ ", " ✧");
  // 4. WhatsApp Stylish
  addDecorated("WhatsApp Stylish", "boldItalic", "» ", " «");
  // 5. WhatsApp Script
  addStyle("WhatsApp Script", "scriptLight");
  // 6. WhatsApp Bubble
  addStyle("WhatsApp Bubble", "bubble");
  // 7. WhatsApp Cute
  addDecorated("WhatsApp Cute", "sansItalic", "♡ ", " ♡");
  // 8. WhatsApp Decorative
  addDecorated("WhatsApp Decorative", "gothic", "❧ ", " ☙");
  // 9. WhatsApp Status Font
  addDecorated("WhatsApp Status Font", "sansBold", "『 ", " 』");
  // 10. WhatsApp Message Font
  addStyle("WhatsApp Message Font", "mono");

  return styles;
};

// --- Instagram Safe Styles (Zalgo/Glitch Excluded) ---
export const generateInstagramSafeStyles = (input: string): GeneratedStyle[] => {
  if (!input) return [];
  const styles: GeneratedStyle[] = [];

  const addStyle = (label: string, styleId: string, category = "Instagram Uyumlu Stiller") => {
    styles.push({
      id: `ig-safe-${styleId}`,
      label,
      preview: transformTextWithStyle(input, styleId),
      category
    });
  };

  addStyle("Kalın", "bold");
  addStyle("İtalik", "italic");
  addStyle("Kalın İtalik", "boldItalic");
  addStyle("Sans Serif", "sans");
  addStyle("Sans Kalın", "sansBold");
  addStyle("El Yazısı", "script");
  addStyle("Zarif El Yazısı", "scriptLight");
  addStyle("Küçük Büyük Harf", "smallCaps");
  addStyle("Monospace", "mono");
  addStyle("Gotik", "gothic");

  return styles;
};

// --- Name Generator Styles (10-20 beautiful styles only) ---
export const generateNameStyles = (input: string): GeneratedStyle[] => {
  if (!input) return [];
  const styles: GeneratedStyle[] = [];

  const addStyle = (label: string, styleId: string, category = "Şekilli İsim Stilleri") => {
    styles.push({
      id: `name-${styleId}`,
      label,
      preview: transformTextWithStyle(input, styleId),
      category
    });
  };

  const addDecorated = (label: string, styleId: string, prefix: string, suffix: string) => {
    styles.push({
      id: `name-dec-${label.toLowerCase().replace(/\\s+/g, '-')}`,
      label,
      preview: `${prefix}${transformTextWithStyle(input, styleId)}${suffix}`,
      category: "Şekilli İsim Stilleri"
    });
  };

  // Curated styles (15 beautiful readable ones)
  addStyle("El Yazısı 1", "script");
  addStyle("El Yazısı 2", "scriptLight");
  addStyle("Kaligrafi", "gothic");
  addStyle("Fraktur", "gothicBold");
  addStyle("Kalın El Yazısı", "sansBoldItalic");
  addStyle("Zarif İtalik", "sansItalic");
  addStyle("Modern Sans", "sans");
  addStyle("Gösterişli", "double");
  addDecorated("Taçlı İsim", "scriptLight", "👑 ", " 👑");
  addDecorated("Yıldızlı İsim", "boldItalic", "★ ", " ★");
  addDecorated("Sihirli İsim", "script", "✨ ", " ✨");
  addDecorated("Kanatlı İsim", "sans", "꧁ ", " ꧂");
  addDecorated("Kalpli İsim", "italic", "❤️ ", " ❤️");
  addDecorated("Lüks İsim", "double", "⚜️ ", " ⚜️");
  addDecorated("Gamer İsim", "gothicBold", "×º°”˜", "˜”°º×");

  return styles;
};

// --- Letter Tool Styles ---
export const generateLetterStyles = (input: string): GeneratedStyle[] => {
  if (!input) return [];
  const styles: GeneratedStyle[] = [];

  const addStyle = (label: string, styleId: string, category = "Şekilli Harfler") => {
    styles.push({
      id: `letter-${styleId}`,
      label,
      preview: transformTextWithStyle(input, styleId),
      category
    });
  };

  addStyle("Baloncuklu (Bubble)", "bubble");
  addStyle("Kare (Square)", "square");
  addStyle("Daire (Negative Circled)", "negativeCircled");
  addStyle("Kare (Negative Squared)", "negativeSquared");
  addStyle("Küçük Büyük Harf (Small Caps)", "smallCaps");
  addStyle("Üst Simge (Superscript)", "superscript");
  addStyle("Alt Simge (Subscript)", "subscript");
  addStyle("Geniş (Wide)", "wide");

  return styles;
};

// --- Emoji & Kaomoji Styles ---
export const emojiPrefixes = ["🔥", "✨", "💫", "🌟", "👑", "❤️", "💎", "🌸", "🦋", "🌙"];
export const emojiSuffixes = ["🔥", "✨", "💫", "🌟", "👑", "❤️", "💎", "🌸", "🦋", "🌙"];
export const kaomojiList = [
  "(づ｡◕‿‿◕｡)づ", "╰(°▽°)╯", "(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧", "(✿◠‿◠)", "(~˘▾˘)~",
  "(*^ω^*)", "ʕ•ᴥ•ʔ", "ᕦ(ò_óˇ)ᕤ", "(⌐■_■)", "¯\\_(ツ)_/¯"
];

export const generateEmojiStyles = (input: string): GeneratedStyle[] => {
  if (!input) return [];
  const styles: GeneratedStyle[] = [];

  // Prefix & Suffix variations
  emojiPrefixes.forEach((emoji, index) => {
    styles.push({
      id: `emoji-both-${index}`,
      label: `Emoji Süsleme ${index + 1}`,
      preview: `${emoji} ${input} ${emojiSuffixes[index]}`,
      category: "Emoji Stilleri"
    });
  });

  // Kaomoji combinations
  kaomojiList.forEach((kaomoji, index) => {
    styles.push({
      id: `emoji-kao-${index}`,
      label: `Kaomoji ${index + 1}`,
      preview: `${input} ${kaomoji}`,
      category: "Kaomoji Stilleri"
    });
  });

  return styles;
};
