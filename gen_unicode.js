
const getSmpBlock = (startHex, count = 26) => {
    let result = "";
    let start = parseInt(startHex, 16);
    for (let i = 0; i < count; i++) {
        result += String.fromCodePoint(start + i);
    }
    return result;
};

// Mathematical Bold Serif
const boldUpper = getSmpBlock("1D400");
const boldLower = getSmpBlock("1D41A");

// Mathematical Italic Serif
const italicUpper = getSmpBlock("1D434");
const italicLower = getSmpBlock("1D44E");

// Mathematical Bold Italic Serif
const boldItalicUpper = getSmpBlock("1D468");
const boldItalicLower = getSmpBlock("1D482");

// Mathematical Script Bold
const scriptUpper = getSmpBlock("1D4D0");
const scriptLower = getSmpBlock("1D4EA");

// Mathematical Fraktur Bold (Gothic Bold)
const gothicBoldUpper = getSmpBlock("1D56C");
const gothicBoldLower = getSmpBlock("1D586");

// Mathematical Sans-Serif Bold
const sansBoldUpper = getSmpBlock("1D5D4");
const sansBoldLower = getSmpBlock("1D5EE");

console.log(`boldUpper: "${boldUpper}"`);
console.log(`boldLower: "${boldLower}"`);
console.log(`italicUpper: "${italicUpper}"`);
console.log(`italicLower: "${italicLower}"`);
console.log(`boldItalicUpper: "${boldItalicUpper}"`);
console.log(`boldItalicLower: "${boldItalicLower}"`);
console.log(`scriptUpper: "${scriptUpper}"`);
console.log(`scriptLower: "${scriptLower}"`);
console.log(`gothicBoldUpper: "${gothicBoldUpper}"`);
console.log(`gothicBoldLower: "${gothicBoldLower}"`);
console.log(`sansBoldUpper: "${sansBoldUpper}"`);
console.log(`sansBoldLower: "${sansBoldLower}"`);
