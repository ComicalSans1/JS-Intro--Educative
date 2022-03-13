class Account{
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }
    credit(val) {
        this.balance += val; 
    }
    describe() {
        return `Name: ${this.name} \nbalance: ${this.balance}`;
    }
}

const poor = new Account("poor");
const rich = new Account("rich")
console.log(poor.balance);
console.log(rich.balance);

poor.credit(10);
rich.credit(999999);

console.log(poor.balance);
console.log(rich.balance);

console.log(poor.describe());
console.log(rich.describe());