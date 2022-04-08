"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b * b - (4 * a * c);

  if (d > 0) {
    let x = (-b + Math.sqrt(d)) / (2 * a);
    let y = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x, y);
  } else if (d == 0) {
    let z = -b / (2 * a);
    arr.push(z);
  } else {
    arr = [];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
