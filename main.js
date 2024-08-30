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
  if (str.length > 18) {
      let result = '';
      for (let i = 0; i < 15; i++) {
          result += str[i];
      }
      result += '...';
      return result;
  }
  return str;
}

console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'));

// ciEmailify function to convert a two-part name into an email.

function ciEmailify(fullName) {
  let email = '';
  let atSymbol = '@';
  let domain = 'perseverenow.org';
  let lowerCaseOffset = 'a'.charCodeAt(0) - 'A'.charCodeAt(0); // Offset to convert uppercase to lowercase

  for (let i = 0; i < fullName.length; i++) {
      let charCode = fullName.charCodeAt(i);
      
      if (fullName[i] === ' ') {
          email += '.';
      } else if (charCode >= 65 && charCode <= 90) { // Uppercase letters
          email += String.fromCharCode(charCode + lowerCaseOffset);
      } else {
          email += fullName[i];
      }
  }

  email += atSymbol;

  for (let i = 0; i < domain.length; i++) {
      email += domain[i];
  }

  return email;
}

console.log(ciEmailify('colin jaffe')); // Output: 'colin.jaffe@perseverenow.org'

// reverse function to reverse a string.
function reverse(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
  }
  return result;
}

console.log(reverse('Learning JavaScript'));

//onlyVowels is a function to return a string with only vowels.

function onlyVowels(word) {
  const vowels = 'aeiouAEIOU';
  let result = '';

  for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
          if (word[i] === vowels[j]) {
              result += word[i];
              break;
          }
      }
  }

  return result;
}

console.log(onlyVowels('javascript'));

// Extra stretch goals //
// crazyCase function to convert a string to a crazy case.
function crazyCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
          result += str[i].toLowerCase();
      } else {
          result += str[i].toUpperCase();
      }
  }
  return result;
}

console.log(crazyCase('hello'));

// titlecase function to convert a string to title case.

function titleCase(str) {
  let result = '';
  let capitalizeNext = true;

  for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
          result += str[i];
          capitalizeNext = true;
      } else if (capitalizeNext) {
          result += str[i].toUpperCase();
          capitalizeNext = false;
      } else {
          result += str[i].toLowerCase();
      }
  }

  return result;
}

console.log(titleCase('return of the king')); // 'Return Of The King'

// camelCase function to convert a string to camel case.

function camelCase(str) {
  let result = '';
  let capitalizeNext = false;

  for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char === ' ' || char === '-' || char === '_') {
          capitalizeNext = true;
      } else {
          if (capitalizeNext) {
              result += char.toUpperCase();
              capitalizeNext = false;
          } else {
              result += char.toLowerCase();
          }
      }
  }

  return result;
}

console.log(camelCase('hello world'));

// crazyCase2ReturnOfCrazyCase same as `crazyCase`, but does NOT count spaces as letters to upper or lower case.

function crazyCase2ReturnOfCrazyCase(str) {
  let result = '';
  let toggle = true; // Start with true to toggle between lower and upper case

  for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
          if (toggle) {
              result += str[i].toLowerCase();
          } else {
              result += str[i].toUpperCase();
          }
          toggle = !toggle; // Switch the case for the next letter
      } else {
          result += str[i]; // Just add the space as is
      }
  }

  return result;
}

// Examples:
console.log(crazyCase2ReturnOfCrazyCase('multiple words here')); // 'mUlTiPlE wOrDs HeRe'

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
