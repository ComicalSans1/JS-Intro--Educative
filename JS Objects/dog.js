const dog = {
    name: "Gilgamesh, Destroyer of worlds",
    species: "Eldritch Monstrosity",
    size: "too big",

    describe() {
        console.log(`please save me from ${this.name}. I'm not capable of raising an ${this.species} any longer. it's simply ${this.size}.`);
    },
    bark() {
        return "Woof!";
    },
}

dog.describe();
console.log(dog.bark());