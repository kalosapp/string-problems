/* 
 * Problem: Given a string return a new string with reversed order of characters
 * Example reverse('mango') === 'ognam' 
*/
   
/* 
 ? Solution #1, Using javascript built-in function reverse.
*/

function reverse(str) {
  return str.split("").reverse().join("");
}

/*
? Solution #2, Using javascript built-in function reduce
*/

function reverse(str) {
  return str.split("").reduce((rev, char) => {
    return char + rev;
  });
}

/*
? Solution #3, Withou built-in functions, Using for loop
*/

function reverse(str) {
  let rev = "";
  for (let char of str) {
    rev = char + rev;
  }
  return rev;
}

/*
? Solution #4, Using recursion
*/

function reverse(str) {
  if (str.length === 1) return str[0];
  return reverse(str.substring(1)) + str[0];
}

module.exports = reverse;
