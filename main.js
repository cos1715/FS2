// // primitive type
// const number = 1;
// const text = "";
// const boolean = true; // boolean type
// const notBoolean = false; // boolean type
// const undef = undefined;
// const empty = null;
// const symbol = new Symbol("");
// const bigNumber = 1n;
// // complex type
// const obj = {};

// // numbers
// const int = 1;
// const float = 2.4;
// const negativeNumber = -2;

// // binary (2)
// // 0,1
// const binary = 0b01; //0b
// // octal (8)
// // 0,1,2,3,4,5,6,7
// const octal = 0o4; //0o
// // hex (16)
// // 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f
// const hex = 0x13f;

// const exponent = 10e5;

// // split number for readability
// const veryLargeNumber = 10_000_000_000;
// const veryLargeNumber2 = 10000000000;

// // special values
// const maxInfinity = Infinity;
// const minInfinity = -Infinity;
// const notANumber = NaN;

// // typeof
// // checks type of variable/value
// const type = typeof notANumber;

// // number operators
// // +
// // 1+1===2
// // -
// // 2-1===1
// // *
// // 2*2===4
// // /
// // 4/2===2
// // unary plus (converts to number type)
// // ** pow
// // 2**10===1024
// // % (can be used to check for odd and even)
// // 4%2===0
// // 5%2===1
// // prefix increment
// // ++num // increase by 1
// // postfix increment
// // num++ // increase by 1 (be careful)
// // prefix decrement
// // --num // decrease by 1
// // postfix decrement
// // num-- // decrease by 1 (be careful)
// // assignment
// // let num = 1;
// // num += 1  === num = num + 1
// // -=
// // *=
// // /=
// // %=
// // **=

// // number conversion
// +undefined === NaN;
// +null === 0;
// +true === 1;
// +false === 0;
// +"" === 0;
// +"10" === 10;
// +"fgd" === NaN;
// +{ a: 1 } === NaN;

// // access additional number functionality
// const num = 1;
// num.toString();
// (1).toString();

// method	description
// toString()	Returns a number as a string
// toExponential()	Returns a number written in exponential notation
// toFixed()	Returns a number written with a number of decimals
// toPrecision()	Returns a number written with a specified length
// ValueOf()	Returns a number as a number

// isNaN()
// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)		Returns x rounded up to its nearest integer
// Math.floor(x)		Returns x rounded down to its nearest integer
// Math.trunc(x)		Returns the integer part of x (new in ES6)
// Math.sqrt()
// Math.abs()
// Math.min() and Math.max()

// // random from 1 to 5
// Math.floor(Math.random() * 5) + 1;

const min = parseInt(prompt("Enter min value"));
const max = parseInt(prompt("Enter max value"));
const randValue = Math.floor(Math.random() * (max - min + 1)) + min;
alert(randValue);
