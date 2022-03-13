const presenttense = ["talk", "walk", "run", "mine", "spin", "dine", "combine", "kill"]

const presentToContin = (word) => {
    if (word.endsWith("n")) {
        return word + "ning";
    }
    else if (word.endsWith("e")) {
        return word.replace(word[word.length - 1], "ing");
    }
    else {
        return word + "ing";
    }
}
const presentcontinuous = presenttense.map(w => presentToContin(w));

console.log(presentcontinuous);