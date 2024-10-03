// versi js
// const message = "hello world"

// versi Ts
const  message: string = "hello world";

// ====== String build in method
const nama: string = "Siti Khodijah";
const nama2: string = " Metal";


console.log(nama.toLowerCase());
console.log(nama.toUpperCase());
console.log(nama.replace("S","o"));
console.log(nama.replaceAll("i","o"));
console.log(nama.split(""));
console.log(nama.split(" "));
console.log(nama.concat(nama2));
console.log(nama.slice(0,3));
console.log(nama.slice(3));


const nama1: string = nama.toLowerCase();
console.log(nama1);

// ===== TAMPLATE LITERALS TAMPLATE STRING

const nama3:string = "jack";
const message1:string = `welcome ${nama3}`;

console.log(message1);
console.log("welcome"+" "+ nama3);//ini cara manual

// ==== NUMBER BUILD IN METHOD
const angka: string = "2000";
console.log(typeof Number(angka));
console.log(typeof parseInt(angka));
console.log(typeof angka);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


// String conversion
const angka1:number = 20;
console.log(String(123));
console.log(angka1.toString());

 // Boolean conversion
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("")); // karna didalam tidak ada value
console.log(Boolean(" ")); // karna didalam ada value
console.log(Boolean("0")); // karna didalam ada value
console.log(Boolean("false")); // karna didalam ada value
 
// ======= Date data types
const now : Date = new Date();


console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()); //kenapa 9 itu karena diJS itu dimulai dari 0
console.log(now.getMonth() + 1); //untuk sama dengan yg sebenarnya harus di tambah 1
console.log(now.getDate());
console.log(now.getTime());
 

// Set method
now.setDate(10);
now.setMonth(5);
now.setFullYear(2040);

console.log(now);
 
// ======== BASIC OPERATOR
// + -> pertambahan
// - -> pengurangan
// * -> perkalian
// / -> pembagian
// % -> modulo sisa bagi
// ** -> pangkat
 

const a = 2;
const b = 3;
const c = a + b;
console.log(c);

console.log(1 + 1);
console.log(2 - 2);
console.log(2 * 4);
console.log(4 / 2);
console.log(5 % 2);
console.log(2 ** 2);

// ======== MODIFY IN PLACE
// n = n + 2

let n: number = 4;
n += 2; //shortcut
// n = n + 2 -> ini cara yang panjang

console.log(n);


// ===== INCERMENT & DECREMENT
let counter: number = 2;

counter++; // increment
//  counter--; // decrement

console.log(counter);

// ======== POSTFIX & PREFIX
let counter2: number = 2;

//console.log(++counter2); //preflix
console.log(counter2++); //postfix

// ========= COMPARISON OPERATOR

// console.log(5 == "5"); //pengecekan di value aja
// console.log(5 === "5"); // pengecekan di value dam tipe data

console.log(5 > 2);
console.log(5 < 2);
console.log(5 <= 2);
console.log(5 >= 2);

// ======= MATH

// math ceil -> membulatkan angka ke atas 
console.log(Math.ceil(4.3));

// math flour -> membulatkan angka ke bawah
console.log(Math.floor(4.3));

// math round -> membulatkan angka ke bilangan bulat yang terdekat
console.log(Math.round(4.2));
console.log(Math.round(4.6));

// math max -> mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(1,2,3,4,5,6,7,8,9));

// math min -> mengembalikan angka terkecil dari sekumpulan angka
console.log(Math.min(1,2,3,4,5,6));

// math abs -> menghilangkan tanda negatif
console.log(Math.abs(-18));

// math random -> menghasilkan angka acak antara 0 dan 1
console.log(Math.random());


