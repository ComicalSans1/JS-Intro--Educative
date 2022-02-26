values = [3, 11, 7, 2, 9, 10];

function maxArr(arr) {
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i-1]) {
            if (arr[i] > temp) {
                temp = arr[i];
            }
        }
    }
    
    return temp;
}

console.log(maxArr(values));