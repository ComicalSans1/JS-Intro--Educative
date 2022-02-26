var words = {
    list: [],
    addWord(word) {
        if (!word.endsWith("ing")) {
            this.list.push(word);
        }
    }
}

var words1 = {
    list: [],
    addWord(word) {
        if (!word.startsWith("Coc")) {
            this.list.push(word);
        }
    }
}
words.addWord("Hello");
words.addWord("World");
words.addWord("Working");
words.addWord("London");

words1.addWord("Cookie");
words1.addWord("Cool");
words1.addWord("Coconut");
words1.addWord("Cook");

console.log(words.list);
console.log(words1.list);