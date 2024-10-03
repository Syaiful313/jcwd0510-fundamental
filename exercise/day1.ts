// no 1
const Length : number = 5;
const Width : number= 3;
const area1 : number =( Length * Width);

console.log(area1);

// no 2
const Length1 : number = 5;
const Width1 : number = 3;
const perimeter : number = 2 * (Length1 + Width1);

console.log(perimeter);

// no 3
const radius: number = 5;

const  diameter : number = 2 * radius;
const circumference : number = 2 * 3.14 * radius;
const area : number = radius * radius * 3.14;

console.log(diameter);
console.log(circumference);
console.log(area);


// no 4 
const a : number = 80;
const b : number = 65;
const c : number = a + b;
const angles : number = (180 - c);
console.log(angles);

// no 5

const tahun : number = 365;
const hasilTahun : number = Math.floor(400/tahun);
const hasilBulan : number = Math.floor((400%tahun)/ 30);
const hasilHari : number = ((400%tahun) % 30);

console.log(hasilTahun +" year, "+ hasilBulan +" month ," +hasilHari +" day");

const tahun1 : number = 365;
const hasilTahun1 : number = Math.floor(366/tahun);
const hasilBulan1 : number = Math.floor((366%tahun)/ 30);
const hasilHari1: number = ((366%tahun) % 30);

console.log(hasilTahun1 +" year ,"+ hasilBulan1 +" month ," +hasilHari1 +" day");


// no 6
const date1 : Date = new Date ("2024-01-20");
const date2 : Date = new Date ("2024-01-22");
const bedaTanggal : number = Math.abs(date1.getTime() - date2.getTime());
const bedaHari : number = bedaTanggal / (1000 * 3600 * 24);

console.log(`peerbedaan hari dari tanggal pertama dan kedua : ${bedaHari}`);
