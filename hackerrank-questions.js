function sockMerchant(n, ar) {
  let pairs = 0
  for (let i = 0; i < ar.length; i++) {
    for (let j = ar.length-1; j >= 0; j--) {
      // console.log(ar[i], ar[j])
      if (ar[i] === ar[j]) {
        pairs++
        console.log('PAIRS: ', pairs)
        ar.splice(j, 1)
        ar.splice(i, 1)
        console.log(ar)
        break
      }
    }
  }
  return pairs
}

// console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]))
console.log(sockMerchant(10,  [1,2,3,2,4,3,1,2,3,4]))