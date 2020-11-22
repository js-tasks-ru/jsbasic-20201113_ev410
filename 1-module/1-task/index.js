/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
	let  factorial = 1;

	if (n != 0){
	  	do {
	  		factorial = factorial * n;
	  		n--;
	  	} while (n > 1);
  	}

  	return factorial;
}

let num = +prompt('Введите число','')

if (Object.is(num,NaN) != true && num >= 0 && (num ^ 0) === num)
	alert(`Факториал числа: ${factorial(num)}`)
else
	alert(`Задано не натуральное число`);