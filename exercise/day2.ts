// no.1

let num: number = 2;

if (num % 2 !== 0) {
  console.log(`${num} -> odd number`);
} else {
  console.log(`${num} -> even number`);
}

// no.2

const angka: number = 0;
let prima: boolean = true;

if (angka <= 1) {
  console.log(`${angka} is not a prime number`);
} else {
  for (let i = 2; i <= angka / 2; i++) {
    if (angka % i === 0) {
      prima = false;
      break;
    }
  }

  if (prima) {
    console.log(`${angka} is a prime number`);
  } else {
    console.log(`${angka} is not a prime number`);
  }
}

// no.3

const number: number = 5;
let sum: number = 0,
  i = 1;

while (i <= number) {
  sum += i;
  i++;
}
console.log(`the sum of natural numbers ${number} : ` + sum);

// no.4

let number1 = 4;
let factorial = 1;

for (let i = 1; i <= number1; i++) {
  factorial *= i;
}

console.log(`Faktorial dari ${number1} adalah: ${factorial}`);

// no.5


console.log();
console.log();
console.log();
