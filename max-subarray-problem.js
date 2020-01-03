/* The maximum sum subarray problem consists in finding the maximum sum 
of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the
maximum sum is the sum of the whole array. If the list is made up of only negative numbers,
return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty 
list or array is also a valid sublist/subarray.
*/

var maxSequence = function(arr){
  let maxSum = 0;
  let runningSum = 0; // adding up the items on the array from the start

  for (let item of arr) {
    runningSum += item;
    maxSum = Math.max(maxSum, runningSum); // compare the biggest sum from before with our current sum
    if (runningSum < 0) {
      runningSum = 0; // it will eventually return 0 if items til now result in a negative sum
    }
  }
  return maxSum;
}

