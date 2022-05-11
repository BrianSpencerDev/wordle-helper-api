const fs = require('fs');
const path = require('path');

//populate words array with strings array and char frequency array
function loadWords() {
    const words = []

    const file = path.resolve(__dirname, "../words.txt");

    //construct strings array and add it to words array
    words.push(fs.readFileSync(file, "utf-8").split("\n"));

    //init frequency array
    words.push([]);

    //go through strings array and find frequency of chars
    for(const word of words[0]){
        const frequency = {};

        //find frequency of chars in word
        for (const char of word){
            frequency[char] ? frequency[char] += 1 : frequency[char] = 1;
        }

        //add frequency to frequency array
        words[1].push(frequency);
    }

    
    return words
}

module.exports = loadWords;
