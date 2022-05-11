const express = require('express');
const { query, validationResult } = require('express-validator');
const findWords = require('./findWords');
const loadWords = require('./loadWords');

const app = express();

app.use(express.urlencoded({extended: true}));

app.use(express.json());

//load strings and frequencies into array
const words = loadWords();

app.get(
    '/', 
    //validate req.query.letters
    query('letters')
    .notEmpty()
    .withMessage('Letters cannot be empty')
    .isString()
    .withMessage('Letters must be a string')
    .isLength({ min: 1 })
    .withMessage('Letters must be at least 1 character')
    .isLength({ max: 5 })
    .withMessage('Letters must not be more than 5 characters')
    //validate that letters only contains letters and ?'s
    .custom(value => {
        if (/^[a-zA-Z?]+$/.test(value))
            return true

        return false
    })
    .withMessage('Letters must only contain letters and ?'),
    (req, res) => {
    const errors = validationResult(req);
    
    //if there are error return 400 status code and error(s)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const letters = req.query.letters;

    const wordsWith = findWords(letters, words);

    const results = {
        words: wordsWith
    }
    res.status(200).json(results);
}) 

module.exports = app;