const numbers = [1, 2, 3, 4, 5];

const dblnum = numbers.map(i => i*2);
const numadd = numbers.map(i => i + 1);

console.log(dblnum);
console.log(numadd);

const square = (num) => {return num * num};
const numsquare = numbers.map(i => square(i));

console.log(numsquare);