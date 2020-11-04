"use strict";

var matUtil = require('./utils.js');

var mat = [[1, 2], [3, 4]];
var mat1 = [[5, 6], [7, 8]];
var mat2 = [[9, 10], [11, 12]];
console.log(matUtil.matrixProduct(mat1, mat2));
console.log(matUtil.sumOfMatrices(mat1, mat2));
console.log(matUtil.sumOfEachRow(mat));