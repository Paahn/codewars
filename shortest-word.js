/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
  let arr = s.split(" ");
  let minWord = arr[0];
  for (let item of arr) {
    if (item.length < minWord.length) {
      minWord = item;
    }
  }
  return minWord.length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));