/* Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  let timeFound = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[i] === A[j]) {
        timeFound += 1;
      }
    }
    if (timeFound % 2 !== 0) {
      return A[i];
    }
  }
}