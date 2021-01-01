/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  // ваш код...
	let filterArr = arr.map(item => (item >= a && item <=b) ? item : null);
	let pos = filterArr.indexOf(null);

	while (pos !== -1) {
		filterArr.splice(pos, 1);
	  	pos = filterArr.indexOf(null);	
	}

  return filterArr
}
