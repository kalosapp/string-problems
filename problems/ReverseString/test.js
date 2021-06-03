const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('mango')).toEqual('ognam');
});

test('Reverse reverses a string', () => {
  expect(reverse('  ab ')).toEqual(' ba  ');
});

test('Reverse reverses a string', () => {
  expect(reverse('  brayan')).toEqual('nayarb  ');
});
