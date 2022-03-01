var vowelList = ["a", "e", "i", "o", "u"];

function vowels(str) {
    var num = 0;
    for (var i of str) {
        for (var j of vowelList) {
            if (i === j) {
                num++;
            }
        }
    }
    return num;
}

console.log(vowels("do you have severely lacking self worth? cause i do"));