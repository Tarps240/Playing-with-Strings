/******************
 * YOUR CODE HERE *
 ******************/
//xify problem.
function xify(inputString) {

  let result = '';
  
  // Loop through each character in the input string
  for (let i = 0; i < inputString.length; i++) {
      result += 'x'; // Append 'x' to the result for each character
  }
  
  return result;
}

const originalString = "I love Renee!";
const replacedString = xify(originalString);

console.log(replacedString);

// yellingChars excersize.

function yellingChars(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i] + '!';
  }
  return result;
}

console.log(yellingChars("I love Renee!"));

// indexedChars problem.

function indexedChars(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
      result += i + str[i];
  }
  return result;
}

console.log(indexedChars("I wanna go fast!"));

// numberedChars problem.
function numberedChars(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += '(' + (i + 1) + ')' + str[i];
  }
  return result;
}
console.log(numberedChars("Testing the function"));

// exclaim problem.
function exclaim(sentence) {
  let result = '';
  for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === '?' || sentence[i] === '.') {
          result += '!';
      } else {
          result += sentence[i];
      }
  }
  return result;
}

console.log(exclaim('What are you doing? Are you a fool?')); 
console.log(exclaim('This is fine.'));

// repeatIt problem.

function repeatIt(str, n) {
  let result = '';
  for (let i = 0; i < n; i++) {
      result += str;
  }
  return result;
}

console.log(repeatIt("hello", 3));
console.log(repeatIt("abc", 2));

// truncate problem.
function truncate(str) {
  let result = '';
  let maxLength = 15;

  for (let i = 0; i < maxLength && i < str.length; i++) {
      result += str[i];
  }

  if (str.length > 18) {
      result += '...';
  }

  return result;
}

console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.')); 

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

// if (typeof smilify === 'undefined') {
//   smilify = undefined;
// }

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

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
  xify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
