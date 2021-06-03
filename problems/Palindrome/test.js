const palindrome = require('./index');

test('palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function');
});

test('"mnm" is a palindrome', () => {
  expect(palindrome('mnm')).toBeTruthy();
});

test('" cdc" is not a palindrome', () => {
  expect(palindrome(' cdc')).toBeFalsy();
});

test('"efe " is not a palindrome', () => {
  expect(palindrome('efe ')).toBeFalsy();
});

test('"cricket" is not a palindrome', () => {
  expect(palindrome('cricket')).toBeFalsy();
});

test('"553355" a palindrome', () => {
  expect(palindrome('553355')).toBeTruthy();
});

test('"mango shake" is not a palindrome', () => {
  expect(palindrome('mango shake')).toBeFalsy();
});

test('"malayalam" a palindrome', () => {
  expect(palindrome('malayalam')).toBeTruthy();
});
