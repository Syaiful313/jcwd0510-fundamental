// ARRAY

const arr: string[] = ["a", "b", "c"];
const arr1: string[] = new Array("a", "b", "c");

const arr3: number[] = [1, 2, 3, 4];
const arr4: number[] = new Array(1, 2, 3, 4);

// array of object

const students1: { name: string; email: string }[] = [
  { name: "budi", email: "budi@gmail.com" },
  { name: "siti", email: "siti@gmail.com" },
  { name: "joko", email: "joko@gmail.com" },
];

// pascalCase
// singular

interface student {
  name: string;
  email: string;
  hobby?: string; // menggunakan tanda ? untuk menjelaskan bahwa itu optional
}
const students: student[] = [
  { name: "budi", email: "budi@gmail.com", hobby: "futsal" }, // kenapa yang lain tidak eror itu karna ini optinal
  { name: "siti", email: "siti@gmail.com" },
  { name: "joko", email: "joko@gmail.com" },
];

// for of ======

const fruits: string[] = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

const bilangan: number[] = [1, 2, 3, 4, 5, 6];
let total: number = 0;

for (const bilangan1 of bilangan) {
  total += bilangan1;
}

console.log(total);

// FUNTION ===========================
// ada 2 cara untuk menuliskan fungsi :

// 1. funtion declaration

function square(number: number) {
  // didalam () itu namanya parameter
  return number * number;
}

const resault = square(5); // angka didalam () itu namanya argumen
console.log(resault);

// 2.Funtion expression

const square1 = function (number: number) {
  return number * number;
};

const resault3 = square1(10);
const resault4 = square1(5);

console.log(resault3);
console.log(resault4);

// FUNTION SCOPE =============
// variabel yang di define didalam function hanya bisa diakses didalam fanction tsb

function greating() {
  const hello = "Hello";
  console.log(hello); // ini bisa
  return hello;
}
// console.log(hello);  //ini tidak bisa

greating();

// parameter & argument
// parameter -> variabel yang mewakili value dari argumen yang dimasukan

// argument -> value yang dimasukan saat pemanggilan function
//                  parameter
function greating1(name: string) {
  const hello = "Hello";
  console.log(hello); // ini bisa
  return hello + " " + name;
}
//                    Argumen
console.log(greating1("budi"));
console.log(greating1("metal"));
console.log(greating1("sito"));

// DEFAULT PARAMETER ===========
function multiply(a: number, b: number = 3) {
  // setelah sama dengan itu untuk default , kalau cuma 1 hanya diisi yang belakang jangan yg depan
  console.log(a);
  console.log(b);
  return a * b;
}

console.log(multiply(2, 4));
console.log(multiply(12, 24));

// Rest Parameter ====
// mewakili sisa argument ke dalam 1 variabel parameter

function myFunc(a: number, b: number, ...manyMoreArgs: number[]) {
  console.log(a);
  console.log(b);
  console.log(manyMoreArgs);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Nested function
// fungsi yang berada didalam fungsi
// inner function bisa diakses parameter dari outer function
// outer function tidak bisa akses parameter dari inner function
// function hanya return 1 kali

// outer function
function getMassage(fristName: string) {
  //    inner function 1
  function sayHello() {
    return "Hello " + fristName + ",";
  }

  //    inner function 2
  function welcomeMassage() {
    return "Welcome to purwadhika!";
  }

  return sayHello() + " " + welcomeMassage();
}

console.log(getMassage("budi"));

// Closure ===============
// inner function selalu mempunyai akses ke variable dan parameter dari outer function bahkan setelah function tsb di return

function greating2(name: string) {
  const defaultMessage: string = "Hello";

  return function () {
    return defaultMessage + " " + name;
  };
}

const result5 = greating2("Budi");

console.log(result5());

// RECURSIVE ============
// fungsi yang memanggil dirinya sendiri

function countDown(number: number) {
  console.log(number);

  let nextNumber = number - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

countDown(12);

// ARROW FUNCTION ===============
// shortcut untuk menuliskan function expression

// contoh funtion expression
const square5 = function (number: number) {
  return number * number;
};

// contoh jika diubah ke arrow function
const square6 = (number: number) => {
  return number * number;
};

// kalau misalnya cuma 1 line bisa dibikin kaya gini
const square7 = (number: number) => number * number;

// ARRAY BUILD IN METHOD ==============
// join -> menggabungkan value yang ada dalam array ke dalam bentuk string
const words: string[] = ["hello", "World"];
console.log(words.join(" "));

// pop -> menghilangkan isi value paling akhir dalam array
const words1: string[] = ["Hello", "World", "Hello"];
words1.pop();
console.log(words1);

// shift -> menghilangkan value paling depan dalam array
const words2: string[] = ["Hello", "World", "Hello"];
words2.shift();
console.log(words2);

// push -> menambahkan value ke dalam array di paling akhir
const words3: string[] = ["Hello", "World"];
words3.push("purwadhika");
console.log(words3);

// unshift -> menambahan valuue ke urutan paling depan
const words4: string[] = ["Hello", "World", "Hello"];
words4.unshift("jogja");
console.log(words4);

// concat -> menggabungkan 2 array menjadi 1 array

const arr5: string[] = ["Hello"];
const arr6: string[] = ["world"];
const arr7: string[] = ["world"];

console.log(arr5.concat(arr6));
console.log(arr5.concat(arr6).concat(arr7));

// another option
const mergeArr = [...arr5, ...arr6, ...arr7]; // spread
console.log(mergeArr);

// splice -> untuk menghapus ,mengganti ,atau menambahkan value pada sebuah array
// rumus -> splice(startIndex , berapa yang mau di delete ,item)

const mounths: string[] = ["jan", "march", "april", "june"];

mounths.splice(1, 0, "feb");
console.log(mounths);

mounths.splice(4, 1);
console.log(mounths);

mounths.splice(3, 1, "may");
console.log(mounths);

// slice -> mereturn array baru dengan value yang sudah ditentukan
// index start dan index end dari array tsb
// rumus: slice(startIndex,endIndex)

const fruits2: string[] = ["Apple", "Banana", "Orange", "lemon", "manggo"];
console.log(fruits2.slice(1, 4));
console.log(fruits2.slice(-4, -1));

// indexof -> mencari index dari value yang kita search
// kalau tidak ditemukan akan mereturn -1

const fruits3: string[] = ["Apple", "Banana", "Orange", "lemon", "manggo"];
console.log(fruits3.indexOf("lemon"));

// sort -> mengurutkan isi array berupa string atau number
// versi string

const fruits4: string[] = ["Apple", "Banana", "Orange", "manggo", "lemon"];
fruits4.sort();
console.log(fruits4);

// versi number tanpa compare function
const points: number[] = [3, 1, 4, 2, 7, 5, 9, 8];
points.sort();
console.log(points);

// versi number menggunakan compare function
const points2: number[] = [3, 5, 2, 8, 9, 30];
points2.sort((a, b) => a - b);
console.log(points2);

// reverse -> membalikkan urutan element dalam array
const points3: number[] = [3, 5, 2, 8, 9, 30];
points3.reverse();
console.log(points3);

// foreach -> melakukan looping pada array tapi tidak me-return apapun
const fruits5: string[] = ["Apple", "Banana", "Orange", "manggo", "lemon"];
fruits5.forEach((fruit, index) => {
    console.log(index);
    console.log(fruit);
});

// map -> melakukan looping sama kaya forech tapi me-return array baru 
const fruits6: string[] = ["Apple", "Banana", "Orange", "manggo", "lemon"];

const resault5 = fruits6.map((fruit) => {
    return fruit
})

console.log(resault5);

// filter - melakukan looping juga sama kaya map dan menghasilkan array baru bedasarkan kondisi pada return function
const ages: number[] =  [32,12,52,43];
const result7 = ages.filter((age) => {
    return age > 17;
});

console.log(result7);

// find -> mencari value yang ditemukan pertama kali dalam array

const ages2: number[] = [3,15,29,15,40];

const result6 = ages2.find((age) => age > 14);

console.log(result6);


// findindex -> miri kaya find tapi yang dihasilkan adalah indexnya

const ages3: number[] = [3, 15, 29, 15, 40];

const result10 = ages3.findIndex((age) => age > 14);

console.log(result10);

// reduce -> biasa digunakan untuk melakukan operasi aritmatika pada tiap isi array

const numbers1: number[] = [175, 50, 25, 50];

const result11 = numbers1.reduce((a, b) => a + b);

console.log(result11);

// INCLUDES -> mengecek value pada array ada apa tidak hasil return nya adalah boolean

const fruits7: string[] = ["Mango", "Apple", "Banana", "Orange", "Lemon"];

console.log(fruits7.includes("Apple"));