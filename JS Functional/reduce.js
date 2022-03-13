const numbers = [];
for (let i = 1; i <= 100; i++) {numbers.push(i);}
const numsum = numbers.reduce((acc, x) => acc + x, 0);

console.log(numbers);
console.log(numsum);

const average = numsum / numbers.length;

console.log(average);