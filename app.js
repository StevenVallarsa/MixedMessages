const quoteParts = {
    one: ['To be or not to be',
        'It was the best of time, it was the worst of times',
        'Once upon a midnight dreary, while I pondered weak and weary',
        'Half a league, half a league, Half a league onward',
        'How do I love thee? Let me count the ways',
        'In Xanadu did Kubla Khan A stately pleasure-dome decree'],
    two: ['All in the valley of Death',
        'Over many a quaint and curious volume of forgotten lore',
        'O lovely Pussy! O Pussy, my love, What a beautiful Pussy you are',
        'Old age should burn and rave at close of day',
        ''],
    three: ['And that has made all the difference.',
        'Daddy, daddy, you bastard, I’m through.',
        'And drunk the milk of Paradise.',
        'And my soul from out that shadow that lies floating on the floor shall be lifted—nevermore!',
        'And—which is more—you’ll be a Man, my son!',
        'Do not stand at my grave and cry, I am not there; I did not die.'
        ]
};

/**
 * function to pick random quote snippet
 */
const picker = index => {
    const rnd = Math.floor(Math.random() * quoteParts[index].length);
    console.log(rnd);
    return quoteParts[index][rnd];
};

const parts = ['one', 'two', 'three'];
let quote = '';

for (let part of parts) {
    quote += `${picker(part)},\n`;
}

quote = quote.substring(0, quote.length - 2);
console.log(quote);
