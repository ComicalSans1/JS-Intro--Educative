function reverse(str) {
    let newstr = "";
    for (var i = str.length-1; i >= 0; i--) {
        newstr += str[i];
    }
    return newstr;
}

console.log(reverse("toidi na era uoy"));