const numbers = []
for (let i = 0; i <= 30; i++) {
    numbers.push(Math.floor(Math.random() * 10));
}
const evennum = numbers.filter(i => i % 2 != 1);
const evenhalf = evennum.map(i => i/2);

console.log(numbers);
console.log(evennum);
console.log(evenhalf);