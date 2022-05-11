const findWords = require("../src/findWords.js");

test('properly find words in array with desired letters where position doesnt matter', () => {
    expect(findWords('ar',
        [['cigar', 'tidal', 'route', 'clone', 'acorn'],
        [{'c': 1,'i': 1,'g': 1,'a': 1,'r': 1},
        {'t': 1,'i': 1,'d': 1,'a': 1,'l': 1},
        {'r': 1,'o': 1,'u': 1,'t': 1,'e': 1},
        {'c': 1,'l': 1,'o': 1,'n': 1,'e': 1},
        {'a': 1,'c': 1,'o': 1,'r': 1,'n': 1}]]
        ))
        .toEqual(
            ['acorn', 'cigar']
        );

    expect(findWords('ee', 
        [['cigar', 'tidal', 'route', 'clone', 'acorn', 'melee', 'ember'],
        [{'c': 1,'i': 1,'g': 1,'a': 1,'r': 1},
        {'t': 1,'i': 1,'d': 1,'a': 1,'l': 1},
        {'r': 1,'o': 1,'u': 1,'t': 1,'e': 1},
        {'c': 1,'l': 1,'o': 1,'n': 1,'e': 1},
        {'a': 1,'c': 1,'o': 1,'r': 1,'n': 1},
        {'m': 1,'e': 3,'l': 1},
        {'e': 2,'m': 1,'b': 1,'r': 1}]]
        ))
        .toEqual(
            ['ember', 'melee']
        );
})

test('properly find words in array with desired letters where position matters', () => {
    expect(findWords('X', 
        [['cigar', 'tidal', 'route', 'clone', 'acorn'],
        [{'c': 1,'i': 1,'g': 1,'a': 1,'r': 1},
        {'t': 1,'i': 1,'d': 1,'a': 1,'l': 1},
        {'r': 1,'o': 1,'u': 1,'t': 1,'e': 1},
        {'c': 1,'l': 1,'o': 1,'n': 1,'e': 1},
        {'a': 1,'c': 1,'o': 1,'r': 1,'n': 1}]]
        ))
        .toEqual(
            []
        );

    expect(findWords('????R', 
        [['cigar', 'tidal', 'route', 'clone', 'acorn'],
        [{'c': 1,'i': 1,'g': 1,'a': 1,'r': 1},
        {'t': 1,'i': 1,'d': 1,'a': 1,'l': 1},
        {'r': 1,'o': 1,'u': 1,'t': 1,'e': 1},
        {'c': 1,'l': 1,'o': 1,'n': 1,'e': 1},
        {'a': 1,'c': 1,'o': 1,'r': 1,'n': 1}]]
        ))
        .toEqual(
            ['cigar']
        );
})

test('properly find words in array with desired letters', () => {
    expect(findWords('a???R', 
        [['cigar', 'tidal', 'route', 'clone', 'acorn'],
        [{'c': 1,'i': 1,'g': 1,'a': 1,'r': 1},
        {'t': 1,'i': 1,'d': 1,'a': 1,'l': 1},
        {'r': 1,'o': 1,'u': 1,'t': 1,'e': 1},
        {'c': 1,'l': 1,'o': 1,'n': 1,'e': 1},
        {'a': 1,'c': 1,'o': 1,'r': 1,'n': 1}]]
        ))
        .toEqual(
            ['cigar']
        );

    expect(findWords('Cn', 
        [['cigar', 'tidal', 'route', 'clone', 'acorn'],
        [{'c': 1,'i': 1,'g': 1,'a': 1,'r': 1},
        {'t': 1,'i': 1,'d': 1,'a': 1,'l': 1},
        {'r': 1,'o': 1,'u': 1,'t': 1,'e': 1},
        {'c': 1,'l': 1,'o': 1,'n': 1,'e': 1},
        {'a': 1,'c': 1,'o': 1,'r': 1,'n': 1}]]
        ))
        .toEqual(
            ['clone']
        );

    expect(findWords('e???E',  
        [['cigar', 'tidal', 'route', 'clone', 'acorn', 'melee', 'ember'],
        [{'c': 1,'i': 1,'g': 1,'a': 1,'r': 1},
        {'t': 1,'i': 1,'d': 1,'a': 1,'l': 1},
        {'r': 1,'o': 1,'u': 1,'t': 1,'e': 1},
        {'c': 1,'l': 1,'o': 1,'n': 1,'e': 1},
        {'a': 1,'c': 1,'o': 1,'r': 1,'n': 1},
        {'m': 1,'e': 3,'l': 1},
        {'e': 2,'m': 1,'b': 1,'r': 1}]]
        ))
        .toEqual(
            ['melee']
        );
})