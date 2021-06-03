/* 
* Problem: 
* Given a string, return true if the string is a palindrome or false if it is not.  Palindromes are strings that
* form the same word if it is reversed. *Do* include spaces and punctuation in determining if the string is a palindrome.
* Examples: 
*  palindrome("abba") === true
*  palindrome("abcdefg") === false 
*/

/* 
 ? Solution #1, Using javascript built-in function reverse.
*/

function palindrome(str) {
  return str === str.split('').reverse().join('');
}

/* 
 ? Solution #2, Using javascript built-in function reduce.
*/

function palindrome(str) {
  const reverse = str.split('').reduce((rev, char) => {
    return char + rev;
  })
  return str === reverse;
}

/* 
 ? Solution #3, Using javascript built-in function every.
*/

function palindrome(str) {
  return str.split('').every((char, index) => {
    return char === str[str.length - index - 1]
  });
}

/* 
 ? Solution #4, Witout built-in function, We are Using loop here.
*/

function palindrome(str) {
  let reverse = '';
  for(let char of str) {
    reverse = char + reverse;
  }
  return str === reverse;
}

/* 
 ? Solution #5, using recursion.
*/

function palindrome(str) {
  if (str.length < 2) return true;
  if (str[0] === str[str.length - 1]) {
    return palindrome(str.substring(1, -1));
  }
  return false;
}

module.exports = palindrome;



