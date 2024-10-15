class train {
  countainer: string[];
  maxSize: number;

  constructor() {
    this.countainer = ["masinis"];
    this.maxSize = 5;
  }

  private isFull() {
    return this.countainer.length >= this.maxSize;
  }

  private isEmpety() {
    return this.countainer.length === 1;
  }

  showPassenger() {
    return {
      passenger: this.countainer
        .filter((value) => value !== "masinis")
        .join(","),
      remainingSeat: this.maxSize - this.countainer.length,
    };
  }

  passengerIn(name: string) {
    if (this.isFull()) {
      return "train full";
    }

    if (this.countainer.includes(name)) {
      return "passenger already exist";
    }
    this.countainer.push(name);
    return "add passenger success";
  }

  passengerOut(name: string) {
    if (name === "masinis") {
      return "cannot remove masinis";
    }

    if (this.isEmpety()) {
      return "train is empty";
    }

    const index = this.countainer.indexOf(name);

    if (index === -1) {
        return "passenger not found";
    }
    
    this.countainer.splice(index, 1);
    return "remove passenger success";
  }

}

const taksaka = new train();

console.log(taksaka.passengerIn("joko"));
console.log(taksaka.passengerIn("siti"));
console.log(taksaka.passengerIn("budi"));
console.log(taksaka.passengerIn("agung"));
console.log(taksaka.passengerIn("budi2"));
console.log(taksaka.passengerIn("budi3"));
console.log(taksaka.passengerIn("budi4"));


console.log(taksaka.showPassenger());

console.log(taksaka.passengerOut("budi"));
console.log(taksaka.passengerOut("budi5"));

console.log(taksaka.showPassenger());
