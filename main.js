const arr = [];
const arrWithNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const strArr = ["", " ", "abc"];
const arrWithAnyValue = [1, "", true, []];

const value = arrWithNum[4];

const num = 4;
// num = 2 // error

arrWithAnyValue[1] = 34; // ok

const copy = strArr;
const copyOfCopy = copy;

const length = copy.length;
// push add element to the end
// pop remove last element
// unshift add element to the start
// shift remove first element

const realCopy = [...strArr];

arrWithNum.forEach((element, index) => {
  const newValue = element ** num;
  console.log(`index-${index} `, newValue);
});
const quartoArr = arrWithNum.map((element) => {
  const newValue = element ** num;
  return newValue;
});
const filteredArr = arrWithNum.filter((item) => {
  return item % 2 === 0;
});
const element = arrWithNum.find((item) => {
  return item % 2 === 0 && item > 5;
});
const foundArr = arrWithAnyValue.findIndex((item) => {
  const isArray = Array.isArray(item);
  if (isArray) {
    return item.length === 0;
  } else {
    return false;
  }
});

const reduceValue = arrWithNum.reduce((acc, item, index) => {
  return acc + item;
}, 0);

const mapFilter = arrWithNum.reduce((acc, item) => {
  const even = item % 2 === 0;
  if (even) {
    const value = item * 2;
    acc.push(value);
  }
  return acc;
}, []);

const chars = ["a", "g", "f", "b", "c"];
const shuffledArr = [4, 1, 9, 2, 7, 9, 5];

shuffledArr.sort((a, b) => {
  const value = b - a;
  return value;
});
