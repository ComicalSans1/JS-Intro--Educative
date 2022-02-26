const italian = {
    piz: "pizza",
    pa: "pasta",
    strength: "olive oil",

    attack() {
        return "the italian is now armed with a spaghetti cannon, youre gonna die";
    },
    defend() {
        return `The italian is now equipped with a ${this.piz} shield, youre dead`;
    },
}

italian.mammamia = "italian";

console.log(italian.mammamia);
console.log(italian.attack());
console.log(italian.defend());