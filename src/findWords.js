function findWords(letterStr, words) {
    let wordsWith = [];

    //convert input string to array of letters
    const letters = letterStr.split('');

    //first take the list of words and search for the letters where position matters
    wordsWith = findWordsWithCharPos(letters, words);

    //second take the new list of words and search for the letters where position does not matter
    wordsWith = findWordsContaining(letters, wordsWith);

    //sort array alphabetically
    wordsWith.sort();

    //return array of words
    return wordsWith
}


function findWordsContaining(arr1, arr2){
  const wordsWith = [];
  const frequency = {};
  const wordsFrequency = arr2[1];

  if (arr2[0].length === 0){
    return wordsWith;
  }

  //filter out ?s
  arr1 = arr1.filter(letter => letter !== '?' );

  //find frequency of each char in letters array
  for (const letter of arr1) {
    frequency[letter.toLowerCase()] ? frequency[letter.toLowerCase()] += 1 :     
    frequency[letter.toLowerCase()] = 1;
  }

  //compare frequencies
  for (let i = 0; i < wordsFrequency.length; i++) {
    let doAdd = true;
    const wordFreq = wordsFrequency[i];
    
    for (const char in frequency) {
      //check if the letter is in the word
      if(!(char in wordFreq)) {
        doAdd = false;
        break;
      }
      //make sure char frequency in word is >= char freq in letters 
      if(frequency[char] > wordFreq[char]) {
        doAdd = false;
        break;
      }
    }
    
    //if word contains desired letters add to wordsWith array
    if(doAdd) {
      wordsWith.push(arr2[0][i])
    }   
  }  
  
  return wordsWith;
}

function findWordsWithCharPos(arr1, arr2){
  const wordsWith = [ [], [] ];
  const letterPos = {};
  const words = arr2[0];

  //populate arr with 0
  const numOfLettersIn = new Array(words.length).fill(0);

  
  //check to see if letter is uppercase
  for (let i = 0; i < arr1.length; i++){
    if(arr1[i] === arr1[i].toUpperCase() && arr1[i] !== '?'){
      letterPos[arr1[i].toLowerCase()] = i;
    }
  }
  
  //number of total positions letter to be searched
  const positions = Object.keys(letterPos).length;

  //fill numOfLettersIn with number of desired letters in word
  for (const letter in letterPos){
    const position = letterPos[letter];

    for (let i = 0; i < words.length; i++){
      if(words[i].charAt(position) === letter){
        numOfLettersIn[i]++;
      }
    }
  }

  //if numOfLettersIn equals the num of positions add to wordsWith
  for(let i = 0; i < numOfLettersIn.length; i++){
    if (positions === numOfLettersIn[i]){
      wordsWith[0].push(words[i]);
      wordsWith[1].push(arr2[1][i]);
    }
  }

  return wordsWith;
}


module.exports = findWords;