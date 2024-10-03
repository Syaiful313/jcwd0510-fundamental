// ======= IF STATMENT :
// syntax
// if (condition){
// code block
// }

const age: number = 17;

if (age >= 17) {
  console.log("selamat anda boleh membuat SIM");
}

// ======= ELSE STATMENET :

const age1: number = 12;
if (age1 >= 17) {
  console.log("selamat anda boleh membuat SIM");
} else {
  console.log("anda belum memenuhi persyaratan");
}

// ======== ELSE IF STATMENT :

const input: string = "C";
const grade: string = input.toLowerCase(); // agar apapun hurufnya jadi kecil semua

if (grade === "a") {
  // "if" hanya ada diawal saja
  console.log("nilai bagus");
} else if (grade === "b") {
  // "else if" boleh dipakai sebanyak apapun
  console.log("nilai lumayan");
} else if (grade === "c") {
  console.log("nilai buruk");
} else {
  // "else" ini harus diakhir tidak boleh ditengah apalagi di awal
  console.log("nilai tidak diketahui");
}

// ========= switch case :
const day: string = "kamis";

switch (day) {
  case "senin":
    console.log("hari senin");
    break; //ini satu paket dengan swicth dan tidak bisa klo ini tidak ada
  case "selasa":
    console.log("hari selasa");
    break;
  case "rabu":
    console.log("hari rabu");
    break;
  default:
    console.log("Hari tidak ditemukan");
    break;
}

// ======== LOGICAL OPERATOR
// && -> and
// || -> or
// ! -> not

// OR : kalau salah satu ada true maka hasilnya akan true
const car: string = "mercy";
//      false           true            -> true
if (car === "bmw" || car === "mercy") {
  console.log("mobil jerman");
} else {
  console.log("mobil jepang");
}

// AND : harus keduanya bernilai true agar menghasilkan nilai true

const umur: number = 19;
const punyaSim: boolean = true;
//    true        true                -> true
if (umur >= 18 && punyaSim) {
  console.log("boleh mengendarai kendaraan");
} else {
  console.log("tidak boleh mengendarai kendaraan");
}

const umur1: number = 17;
const punyaSim1: boolean = true;
//      false        true                -> false
if (umur1 >= 18 && punyaSim1) {
  console.log("boleh mengendarai kendaraan");
} else {
  console.log("tidak boleh mengendarai kendaraan");
}

// NOT : membalikan nilai boolean

const isSunny: boolean = true;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

// ======== TERNARY OPERATOR
// SHORCUT untuk if else condition
// condition ? true : false

const str: string = "javaScript";

if (str === "javaScript") {
  console.log("javaScript");
} else {
  console.log("not javaScript");
}

console.log(str === "javaScript" ? "javaScript" : "not javaScript");

console.log(
  str === "javaScript"
    ? "javaScript"
    : str === "typeScript"
    ? "typeScript"
    : "not found"
);

// ======= LOOP STATMENT (perulangan)
// rangkaian intruksi yang dilakukan berulangkali hingga kondisinya tidak terpenuhi

// type loop : for loop ,while loop ,dan do while loop

// FOR LOOP -> mempunyai 3 statment
// statment 1 : menginisialisasikan variable dari looping itu sendiri
// statment 2 : mendefine kondisi dari looping tersebut
// statment 3 : kode yang di eksekusi di akhir setiap iterasi

// syntax : for(statment1;statment2,statment3){
// code block yang akan diulang-ulang
// }

for (let i = 0; i < 5; i++) {
  console.log("hello world");
}

// WHILE LOOP

let i: number = 1;

while (i < 10) {
  console.log("hello world");
  i++;
}

// DO WHILE LOOP
let count: number = 1;

do {
  console.log("ini iterasi ke:" + count);
  count++;
} while (count <= 5);

// ============ BREAK
// untuk menghentikan loop

let sum: number = 0;
while (true) {
  console.log("sum :" + sum);

  if (sum >= 5) break;

  sum++;
}


// =========== CONTINUE
// untuk melakukan skip pada looping

for (let i = 0; i < 5; i++){
    if (i === 3) continue;

    console.log(i);
    
}