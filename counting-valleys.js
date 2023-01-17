function countingValleys(steps, path) {
  let valleys = 0
  let location = 0

  for(let i = 0; i < steps; i++) {
    if(path[i] === 'U') {
      location ++
    } else {
      location --
      if(location === -1) {
        valleys ++
      }
    }
    console.log(location)
  }
  return valleys
}

// console.log(countingValleys(8, 'UDDDUDUU'))
// console.log(countingValleys(16, 'UDUUUDDDDDDUDUUU'))
console.log(countingValleys(10, 'UDDUDUDUDU'))