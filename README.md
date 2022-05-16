# Wordle Helper API

The Wordle Helper API is an API designed to assist with solving the daily wordle. *sshhh your friends don't have to know.* Given a string of letters it will return 5 letter words containing those letters.

deployed to wordleapi.brian-spencer.com

![event parameter badge](https://github.com/BrianSpencerDev/wordle-helper-api/actions/workflows/node.js.yml/badge.svg?event=push)

## How to Use

GET '/' request should contain letters in the query params where letters is a string of characters (a-z, A-Z, and ?) and the string should be at least 1 character long and no more than 5 characters. Lowercase characters position does not matter and uppercase characters position does matter. To fill in spaces to get an uppercase letter in the correct positions '?'s can be used.


Given proper input the api will return a json ```{ words: [] }``` where words contains an array of words all containing the characters from letters

ex: wordleapi.brian-spencer.com/?letters=ee will return 5 letter words containing 2 'e's
