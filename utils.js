function matrixProduct(mat1, mat2) {
    let result = [];
    for (let i = 0; i < mat1.length; i++) {
        result[i] = [];
        for (let j = 0; j < mat2.length; j++) {
            let sum = 0;
            for (let k = 0; k < mat1.length; k++) {
                sum += mat1[i][k] * mat2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}


function sumOfMatrices(mat1, mat2) {
    let result = [];
    for (let i = 0; i < mat1.length; i++) {
        result[i] = [];
        for (let j = 0; j < mat2.length; j++) {
            let sum = 0;
            sum = mat1[i][j] + mat2[i][j];
            result[i][j] = sum;
        }
    }
    return result;
}

function sumOfEachRow (mat) {
  let result = [];
  for (let i = 0; i < mat.length; i++) {
    result.push(sumOfArray(mat[i]));
  }
  return result;

  function sumOfArray (arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
}

module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow,
};