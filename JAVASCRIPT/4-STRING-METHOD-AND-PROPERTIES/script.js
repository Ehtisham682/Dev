const name='Kakarot'
console.log(name.length)
// gives length of the string

console.log(name.toLowerCase())
// gives the string in lowercase
console.log(name.toUpperCase())
// gives the string in uppercase

const goku=' Son goku      '
console.log(goku.trim())
// gives the string with whitespace removed from both ends

console.log(goku.trimStart())
// gives the string with whitespace removed from the beginning
console.log(goku.trimEnd())
// gives the string with whitespace removed from the end

// Methods

const string1="hello, kaun bolre"
console.log(string1.includes("o"))
// checks if the string contains the specified substring and returns true or false

console.log(string1.indexOf('u'))
// returns the index of given character in string, if not found returns -1

console.log(string1.replace('kaun bolre', 'how are you'))

const string2='hello, hello dirty fellow'
console.log(string2.replace('hello', 'whatisgoing'));
// replcaes only the first occurrence of the specified substring

console.log(string2.replaceAll('hello', 'whatisgoing'));


const string3='Ore wa Supa Saiyajin'
const string4='Son Goku-da!!'
console.log(string3.concat(' ' + string4))
// concatenates two or more strings and returns a new string


const accNo='1234'
console.log(accNo.padStart(16,'*'))
// pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

console.log(accNo.padEnd(16,'*'))
// pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the end of the current string.

console.log(string4.charAt(7))
// returns the character at the specified index in a string

// returns the character at the specified index in a string
console.log(string4.charCodeAt(7));

console.log(string3.split(' '));
// splits a string into an array of substrings based on the specified separator and returns the array


const string5=`${string3} Ultra Vegeta One!`
console.log(string5)
// with ` (backtick) we can use template literals to create strings that can span multiple lines and include expressions, variables, and function calls.
