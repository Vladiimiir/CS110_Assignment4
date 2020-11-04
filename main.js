const matUtil = require ('./utils.js')


let mat = [
    [1, 2],
    [3, 4]
];
let mat1 = [
    [5, 6],
    [7, 8]
];

let mat2 = [
    [9, 10],
    [11, 12]
];
console.log(matUtil.matrixProduct(mat1, mat2));
console.log(matUtil.sumOfMatrices(mat1, mat2));
console.log(matUtil.sumOfEachRow(mat));
