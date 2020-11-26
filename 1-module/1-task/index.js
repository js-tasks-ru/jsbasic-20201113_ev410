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