// no.1

const number2: number = 9;

for (let i = 1; i <= 10; i++) {
  const result = i * number2;
  console.log(`${number2} * ${i} = ${result}`);
}

// no.2

const str = "madam";
const reversed = str.split("").reverse().join("");
const isPalindrome : boolean = str === reversed;

console.log(isPalindrome);

// no.3

const centimeters = 100000;
const kilometers = centimeters / 100000;
console.log(`${centimeters} cm = ${kilometers} km`);

// no.4
const uang = 1000;

console.log(`Rp ${uang.toLocaleString("id-ID")}`);

// no.5

let str1 = "Hello world";
let searchString = "ell";
let index = str1.indexOf(searchString);

if (index !== -1) {
  str1 = str1.slice(0, index) + str1.slice(index + searchString.length);
}

console.log(str1);

// no.6

let str3 = "hello world!";
let capitalizedStr = str3
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(capitalizedStr);

// no.7

let str4 = "The QuiCk BrOwN Fox";
let swappedStr = "";

for (let char of str4) {
  swappedStr +=
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}

console.log(swappedStr);

// no.8

let num4 = 42;
let num5 = 27;

let largest1 = num4 > num5 ? num4 : num5;

console.log(`The largest number is: ${largest1}`);

// no.9

let num1 = 42;
let num2 = 27;
let num3 = 18;

let smallest, middle, largest;

if (num1 <= num2 && num1 <= num3) {
  smallest = num1;
  if (num2 <= num3) {
    middle = num2;
    largest = num3;
  } else {
    middle = num3;
    largest = num2;
  }
} else if (num2 <= num1 && num2 <= num3) {
  smallest = num2;
  if (num1 <= num3) {
    middle = num1;
    largest = num3;
  } else {
    middle = num3;
    largest = num1;
  }
} else {
  smallest = num3;
  if (num1 <= num2) {
    middle = num1;
    largest = num2;
  } else {
    middle = num2;
    largest = num1;
  }
}

console.log(`Sorted numbers: ${smallest}, ${middle}, ${largest}`);

// no.10

let input: string | number = "hello";

let result: number;

if (typeof input === "string") {
  result = 1;
} else if (typeof input === "number") {
  result = 2;
} else {
  result = 3;
}

console.log(result);

// no.11

let input2: string = "An apple a day keeps the doctor away".toLowerCase();
let modifiedString = input2.replaceAll('a', '*');

console.log(modifiedString);


