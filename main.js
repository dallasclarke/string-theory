/******************
 * YOUR CODE HERE *
 ******************/

const indexedChars = function (str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result = result + i + str[i] 
  }
  return result;
}

const exclaim = function (str) {
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (currentChar === '?') {
      result = result  + '!' 
    } else if (currentChar === ".") {
      result = result + '!'
    } else {
    result = result + currentChar }
    
  }
    return result;
  }

  const repeatIt = function (str, count) {
    let repeatedStr = '';
      for (let i = 0; i < count; i++) {
        repeatedStr += str;
      }
   
    return repeatedStr;
  }

  const truncate = function (str) {
    let result = ''; 
     for (let i = 0; i < str.length; i++) {
       if (str.length < 18) {
         result = str
       } else {
         result = str.substring(0, 15) + '...'
       }
     }
     return result;
    }

    const ciEmailify = function (str) {
      let result = "";
      let email = "@codeimmersives.com";

        for (let i = 0; i === str.length; i++) {
          result = result + str.toLowerCase() +  '.' + email;
        }
    }

    const reverse = function (str) {
      let result = "";
        for (let i = str.length - 1; i >= 0; i--) {
          result += str[i];
        }
        return result
    }

    const onlyVowels = function (str) {
      let result = "";
      let vowels ='AEIOUaeiou'
      for (let i = vowels; i <= str.length; i++) {
       result += str[i]
    }
      return result
    }









 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  indexedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  numberedChars,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
