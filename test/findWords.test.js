const findWords = require("../src/findWords.js");

test('properly find words in array with desired letters where position doesnt matter', () => {
    expect(findWords('ar', ['cigar', 'tidal', 'route', 'clone', 'acorn'])).toEqual(
        ['acorn', 'cigar']
    );

    expect(findWords('ee', ['cigar', 'tidal', 'route', 'clone', 'acorn', 'melee', 'ember'])).toEqual(
        ['ember', 'melee']
    );
})

test('properly find words in array with desired letters where position matters', () => {
    expect(findWords('X', ['cigar', 'tidal', 'route', 'clone', 'acorn'])).toEqual(
        []
    );

    expect(findWords('????R', ['cigar', 'tidal', 'route', 'clone', 'acorn'])).toEqual(
        ['cigar']
    );
})

test('properly find words in array with desired letters', () => {
    expect(findWords('a???R', ['cigar', 'tidal', 'route', 'clone', 'acorn'])).toEqual(
        ['cigar']
    );

    expect(findWords('n?O', ['cigar', 'tidal', 'route', 'clone', 'acorn'])).toEqual(
        ['acorn','clone']
    );

    expect(findWords('e???E', ['cigar', 'tidal', 'route', 'clone', 'acorn', 'melee', 'ember'])).toEqual(
        ['melee']
    );
})