function jumpingOnClouds(n, c) {
  let minJumps = 0
  let i = 0
  console.log('c length', c.length)
  while (i <= c.length-1) {
    if (c[i + 2] !== 1 && i+2 <= c.length-1) {
      i += 2
      console.log('jump 2 places')
      minJumps ++
      console.log('i', i)
    } else {
      i++
      console.log('jump 1 place')
      minJumps++
      console.log('i', i)
    }
    if (i === c.length-1) {
      break
    }
    console.log('minJumps', minJumps)
    console.log('-----------------')
  }

  return minJumps
}

// console.log(jumpingOnClouds(7, [0,0,1,0,0,1,0]))   // 4
console.log(jumpingOnClouds(6, [0,0,0,1,0,0]))   // 3