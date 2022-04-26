const fs = require('fs');

//populate words array 
function loadWords() {
    const file = '../words.txt';

    const words = fs.readFileSync(file, "utf-8").split("\n");
    
    return words
}

module.exports = loadWords;
