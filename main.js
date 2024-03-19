// create string with ""
const str = "Hello World";
console.log(str);
// test with quotes
const name = 'some text\\ "text in double quotes" text again';
// create string with ''
const singleQuote = 'Single quote';
// create string with ``
const backQuote = `back 


empty space
`;
console.log(backQuote);
console.log('fgfgfd\n\nfgfdgfdg')

const interpolation= `${str} JS`;
console.log(interpolation);


console.log("2/'4'",2/'4'); // NaN, 0.5
console.log("2+'4'",2+'4'); // 24
console.log("2+'gf4'",2+'gf4'); // 2gf4
console.log("'2'+'gf4'",'2'+'gf4'); // 2gf4
console.log("'4'/2",'4'/2); // 2
console.log("'4'+2",'4'+2); // 42
console.log("true + 1",true + 1); // 2
console.log("true + 'gf4'",true + 'gf4'); // truegf4
console.log("true - 'gf4'",true - 'gf4'); // NaN


// length
name.length
// slice cuts str from to 
'Hello World'.slice(1);
'Hello World'.slice(1,5);
// substring (doesn't work with negative numbers)
str.substring(1);
str.substring(1,5);
// substr cuts str from with length 
str.substr(1);
str.substr(1,5);
// replace changes letter with new letter (changes only one letter)
str.replace(' ', '&')
// replace all letters with new letter (changes only one letter)
str.replace('l', '&')
// toUpperCase changes all to upper letters
str.toUpperCase()
// toUpperCase changes all to lower letters
str.toLowerCase()
// trim deletes spaces in the beginning and at the end of the word
str.trim()
