function repeatedStrings(s, n) {
  let occurances = s.split('a').length - 1
  let max = Math.floor(n / s.length)
  let totalAs = occurances * max
  totalAs += (s.slice(0, n % s.length).split('a').length - 1)
  return totalAs
}


console.log(repeatedStrings('bcaaac', 10))






// aba
// abaabaabaa
// 1011011011
// 7 a's total

// first create a new longString based with n letters (repeat string s)
// create an empty object where it counts up the number of times each letter appears
// return the number corresponding with letter 'a'