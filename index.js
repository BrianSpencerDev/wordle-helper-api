const express = require('express');
const loadWords = require('./loadWords');

const app = express();

//load words into array
const words = loadWords();

app.get('/', (req, res) => {
    console.log(words);
    res.send("wordle helper");
}) 

app.listen(3000, () => {
    console.log('Server  is running on port 3000')
})