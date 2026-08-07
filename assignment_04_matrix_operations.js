// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

function readMatrix(rows, cols, label) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const line = readlineSync.question(`Enter row ${i + 1}: `);
    const row = line.trim().split(/\s+/).map(Number);
    matrix.push(row);
  }
  return matrix;
}

function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];
  for (let i = 0; i < cols; i++) {
    result.push([]);
    for (let j = 0; j < rows; j++) {
      result[i].push(matrix[j][i]);
    }
  }
  return result;
}

function addMatrices(a, b) {
  const rows = a.length;
  const cols = a[0].length;
  const result = [];
  for (let i = 0; i < rows; i++) {
    result.push([]);
    for (let j = 0; j < cols; j++) {
      result[i].push(a[i][j] + b[i][j]);
    }
  }
  return result;
}

function multiplyMatrices(a, b) {
  const rowsA = a.length;
  const colsA = a[0].length;
  const colsB = b[0].length;
  const result = [];
  for (let i = 0; i < rowsA; i++) {
    result.push([]);
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += a[i][k] * b[k][j];
      }
      result[i].push(sum);
    }
  }
  return result;
}

function printMatrix(matrix) {
  matrix.forEach(row => {
    console.log(row.map(val => String(val).padStart(4)).join(''));
  });
}

function main() {
  // Part A: Transpose
  console.log("--- Part A: Transpose ---");
  const rowsA = readlineSync.questionInt("Enter number of rows: ");
  const colsA = readlineSync.questionInt("Enter number of columns: ");
  const matrixA = readMatrix(rowsA, colsA);
  console.log("Original Matrix:");
  printMatrix(matrixA);
  console.log("Transposed Matrix:");
  printMatrix(transpose(matrixA));

  // Part B: Addition
  console.log("\n--- Part B: Addition ---");
  console.log("Enter first matrix:");
  const rowsB1 = readlineSync.questionInt("Enter number of rows: ");
  const colsB1 = readlineSync.questionInt("Enter number of columns: ");
  const matrixB1 = readMatrix(rowsB1, colsB1);
  console.log("Enter second matrix (same size):");
  const matrixB2 = readMatrix(rowsB1, colsB1);
  console.log("Sum:");
  printMatrix(addMatrices(matrixB1, matrixB2));

  // Part C: Multiplication
  console.log("\n--- Part C: Multiplication ---");
  console.log("Enter matrix A:");
  const rowsC1 = readlineSync.questionInt("Enter number of rows: ");
  const colsC1 = readlineSync.questionInt("Enter number of columns: ");
  const matrixC1 = readMatrix(rowsC1, colsC1);
  console.log("Enter matrix B:");
  const rowsC2 = readlineSync.questionInt("Enter number of rows (must equal previous columns): ");
  const colsC2 = readlineSync.questionInt("Enter number of columns: ");
  const matrixC2 = readMatrix(rowsC2, colsC2);
  console.log("Product:");
  printMatrix(multiplyMatrices(matrixC1, matrixC2));
}

main();
