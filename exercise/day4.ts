// no.1

function createNumberTriangle(height: number) {
  let currentNumber = 1;
  for (let row = 1; row <= height; row++) {
    let rowString = "";

    for (let col = 1; col <= row; col++) {
      rowString += `${currentNumber.toString().padStart(2, "0")}`;
      currentNumber++;
    }

    console.log(rowString);
  }
}
createNumberTriangle(4);

// no.2

function fizzBuzz(n: number) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}


fizzBuzz(15);


// no.3