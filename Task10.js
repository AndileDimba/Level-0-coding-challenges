// Task 0.10

const findCommonCharacters = (word1,word2) => {
    var result = [];
    var newObj = {};
    var character = word1[0];
    for (let word of word1) {
      newObj[word] = {};
      for (let letter of word) {
        if (newObj[word][letter]) {
          newObj[word][letter] += 1;
        } else {
          newObj[word][letter] = 1;
        }
      }
    }
    for (let letter of character) {
      let count = 1;
      for (let word in newObj) {
        if (word != character) {
          if (newObj[word][letter] > 0) {
            newObj[word][letter] -= 1;
            count += 1;
          }
          if (count === word1.length) {
            result.push(letter);
          } 
        }
      }
    }
    return result;
  };
  
  console.log(findCommonCharacters(['mlamuli&','andile&']));