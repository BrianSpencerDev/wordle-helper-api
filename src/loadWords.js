const fs = require('fs');
const path = require('path');

//populate words array 
function loadWords() {
    const file = path.resolve(__dirname, "../words.txt");

    const words = fs.readFileSync(file, "utf-8").split("\n");
    
    return words
}

module.exports = loadWords;
