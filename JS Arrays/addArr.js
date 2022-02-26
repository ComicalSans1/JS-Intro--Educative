values = [3, 11, 7, 2, 9, 10];

function addArr(values) {
    var heh = 0;
    for (var i of values) {
        heh += i
    }
    return heh;
}

console.log(addArr(values));