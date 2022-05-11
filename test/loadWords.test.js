const loadWords = require("../src/loadWords.js");

test('properly loads words from txt file', () => {
    expect(loadWords()).not.toBeNull();
    expect(loadWords()).not.toBeUndefined();
})

describe('words array should be an array of 2 arrays: arr of strings and arr of objects', () => {

    test('properly test the two arrays are the same length', () => {
        const words = loadWords();

        expect(words[0].length).toBe(words[1].length);
    })

    // Im not sure if its enough coverage to just test one item of the array.
    // It may be better to loop thorugh array and if any item is not string 
    // return false but expect true
    test('properly test string of array contains strings', () => {
        const words = loadWords();

        expect(typeof words[0][1000] === 'string').toBe(true);
    })

    //see above comment
    test('properly test string of array contains objects', () => {
        const words = loadWords();

        expect(typeof words[1][1000] === 'object').toBe(true);
    })

    test('properly test that arrays are related', () => {
        const words = loadWords();

        //only testing one case may be better to test the whole arrays??
        expect(words[0][2243]).toEqual('teddy');
        expect(words[1][2243]).toEqual({"d": 2, "e": 1, "t": 1, "y": 1});

    })
})