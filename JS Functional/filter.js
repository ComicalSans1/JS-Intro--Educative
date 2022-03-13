const numbers = []
for (let i = 0; i <= 10; i++) {
    numbers.push(Math.floor(Math.random() * 10));
}
const upto5 = numbers.filter(i => i <= 5); // this syntax is confusing lmao

console.log(numbers);
console.log(upto5);