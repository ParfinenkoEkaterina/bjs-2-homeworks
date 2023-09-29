"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = (b ** 2) - (4 * a * c);
	if (d < 0) {
		arr.push();
	} else if (d == 0) {
		let root = -b / (2 * a);
		arr.push(root);
	} else if (d > 0) {
		let firstSolution = (-b + Math.sqrt(d)) / (2 * a);
		let secondSolution = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(firstSolution, secondSolution);
	}
	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = parseInt(percent) / 100 / 12;
	if (isNaN(p) || p < 0) {
		return false;
	} else if (isNaN(contribution) || contribution < 0) {
		return false;
	} else if (isNaN(amount) || amount < 0) {
		return false;
	} else {
		let s = amount - contribution;
		let n = countMonths;
		let pay = s * (p + p / (((1 + p) ** n) - 1));
		let totalAmount = (pay * n).toFixed(2);
		return Number(totalAmount);
	}
}


