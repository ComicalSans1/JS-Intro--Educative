values = [5, 11, 7, 2, 9, 10];

function minArr(arr) {
    var temp = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            if (arr[i] < temp) {
                temp = arr[i];
            }
        }
    }
    
    return temp;
}

function secMin(arr) {
    var min = minArr(arr)
    var temp = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != min) {
            if (arr[i] < arr[i-1]) {
                if (arr[i] < temp) {
                    temp = arr[i];
                }
            }
        }
    }
    return temp;
}

console.log(secMin(values));