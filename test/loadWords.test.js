const loadWords = require("../src/loadWords.js");

test('properly loads words from txt file', () => {
    expect(loadWords()).not.toBeNull();
    expect(loadWords()).not.toBeUndefined();
})