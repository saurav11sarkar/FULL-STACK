"use strict";
{
    // problem-3
    // Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.
    function countWordOccurrences(sentence, word) {
        const lSentence = sentence.toLowerCase();
        const lWord = word.toLowerCase();
        const arraySentence = lSentence.split(/\s+/);
        let wordcount = [];
        for (let i of arraySentence) {
            if (i.includes(lWord)) {
                wordcount.push(i);
            }
        }
        return wordcount.length;
    }
    // console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));
}
