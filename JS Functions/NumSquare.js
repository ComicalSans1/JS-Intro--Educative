function square1(num) {
    console.log(num*num);
}

const square2 = num => console.log(num*num);

square1(2);
square2(2);

const square = num => num*num;

for (var i = 1; i <= 9; i++) {
    square(i);
}