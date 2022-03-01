function palindrome(str) {
    let newstr = "";
    for (var i = str.length-1; i >= 0; i--) {
        newstr += str[i];
    }
    if (str === newstr) return true;
    else return false;
}

console.log(palindrome("level"));