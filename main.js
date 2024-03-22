const boolean = true;
const bool = false;

// Type conversion
// '', 0, null, undefined, NaN => false
// everything else => true
const age = +prompt();
if (age > 17) {
  console.log("Pick an university");
} else {
  console.log("Pick a school");
}

console.log("log after if");

const value = age > 17 ? "Pick an university" : "Pick a school";
console.log(value.toUpperCase());

const complex =
  age > 70 ? "Retire" : age > 17 ? "Pick an university" : "Pick a school";

console.log(complex);
