class idiots {
    constructor(name, height, iq) {
        this.name = name;
        this.height = height;
        this.iq = iq;
    }
    describe() {return `this is an ${this.name} hes iq ${this.iq} ok bye`}
}

const me = new idiots("oighgwkigjwailjlaewfjl", 23, -7381);
console.log(me.describe());