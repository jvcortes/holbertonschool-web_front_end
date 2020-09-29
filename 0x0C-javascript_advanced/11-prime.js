function countPrimeNumbers () {
  let count = 0;
  for (let i = 2; i < 100; i++) {
    for (let j = i; j >= 2; j--) {
      if (j == 2) {
        count++;
      }
    }
  }

  return count;
}

const t0 = performance.now();
setTimeout(function () {
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
}, 0)
const t1 = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds`)
