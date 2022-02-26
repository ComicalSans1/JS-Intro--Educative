const BankAccount = {
    name: "alex",
    balance: 0,

    credit(monie) {
        this.balance += monie;
    },
    describe() {
        return `name: ${this.name}, balance: $${this.balance}`;
    }
}

BankAccount.credit(100)
console.log(BankAccount.describe());