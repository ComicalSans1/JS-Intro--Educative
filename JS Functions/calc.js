const calculate = (x, operator, y) => {if (operator === "+") return x + y; if (operator === "-") return x - y; if (operator === "*") return x * y; if (operator === "/") if (y == 0) return "Infinity"; return x / y}

console.log(calculate(4, "+", 6));
console.log(calculate(4, "-", 6));
console.log(calculate(2, "*", 0));
console.log(calculate(12, "/", 0));