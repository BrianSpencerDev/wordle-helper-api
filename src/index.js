const express = require('express');
const { check, validationResult } = require('express-validator');
const findWords = require('./findWords');
const loadWords = require('./loadWords');

const app = express();

app.use(express.urlencoded({extended: true}));

app.use(express.json());

//load words into array
const words = loadWords();

app.get(
    '/', 
    check('letters')
    .notEmpty()
    .withMessage('Letters cannot be empty')
    .isString()
    .withMessage('Letters must be a string')
    .isLength({ min: 1 })
    .withMessage('Letters must be at least 1 character')
    .isLength({ max: 5 })
    .withMessage('Letters must not be more than 5 characters'),
    (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const letters = req.body.letters;
    const wordsWith = findWords(letters, words);

    const results = {
        words: wordsWith
    }
    res.status(200).json(results);
}) 

module.exports = app;