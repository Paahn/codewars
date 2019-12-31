/* Complete the method/function so that it converts dash/underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original word was capitalized
(known as Upper Camel Case, also often referred to as Pascal case).
Examples

toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior" 
*/

function toCamelCase(str){
    let camelCased = "";
    for (let i = 0; i < str.length; i++ ) {
      if (str.charAt(i) === "-" || str.charAt(i) === "_") {
        camelCased += (str.charAt(i + 1).toUpperCase());
        i++; // skip the next letter since we already know what it is
      } else {
        camelCased += str.charAt(i); // leave the original string untouched
      }
    }
    return camelCased;
}