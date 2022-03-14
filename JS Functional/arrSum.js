const arrays = [[1, 4], [11], [3, 5, 7]];

function findSum(arrays) {
    const oneArr = arrays.map(x => x.reduce((acc, x) => acc + x, 0))
    const arrSum = oneArr.reduce((acc, x) => acc + x);
    return arrSum;
}

console.log(findSum(arrays));