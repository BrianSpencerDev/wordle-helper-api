const express = require('express');
const findWords = require('./findWords');
const loadWords = require('./loadWords');

const app = express();

app.use(express.urlencoded({extended: true}));

app.use(express.json());

//load words into array
const words = loadWords();

app.get('/', (req, res) => {
    const letters = req.body.letters;
    const wordsWith = findWords(letters, words);

    const results = {
        words: wordsWith
    }
    res.json(results);
}) 

app.listen(3000, () => {
    console.log('Server  is running on port 3000')
})