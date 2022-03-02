const idiot = {
    name: "idiot",
    iq: -100,
    height: "10 cm",

    describe() {return `this is an ${this.name} hes iq ${this.iq} ok bye`}
}

console.log(idiot.describe());