/* The goal of this exercise is to convert a string to a new string where
each character in the new string is "(" if that character appears only once in 
the original string, or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

function duplicateEncode(word){
  let letterCount = {};
  let letters = word.toLowerCase().split('');
// letterCount will be 0 if we havent come across this letter before in the forEach, otherwise add +1 to its count 
  letters.forEach(function(letter) {
    letterCount[letter] = (letterCount[letter] || 0) + 1; 
  });

  return letters.map(function(letter) {
    return letterCount[letter] === 1 ? '(' : ')';
  }).join('');
}
