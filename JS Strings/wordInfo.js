function length(str) {
    var f = 0;
    for (var i of str) {
        f++;
    }
    return f;
}

function lC(str) {
    return str.toLowerCase(); // ;)
}

function uC(str) {
    return str.toUpperCase(); 
}



console.log(length("edfwfewfwfqf2gfgf2yy2gfy2qy2gyfgyf23"));
console.log(lC("HUWHVHUKWHVUEFG38F3FIYH83IFH"));
console.log(uC("JIiwofjiefewfoihfOHOyhfoihUOHFKEHLHUHKHhuihfewhwuihfwghfewuihfkwhfuwehf"))