const pi = Math.PI;

const circle = {
    radius: 69,

    circumference() {
        return 2 * pi * this.radius
    },
    area() {
        return pi * this.radius**2;
    }
}

console.log(circle.circumference());
console.log(circle.area());