const { palindrome } = require('../utils/for_testing')

test('palindrome', () => {
  const result = palindrome('jazziel')
  expect(result).toBe('leizzaj')
})
