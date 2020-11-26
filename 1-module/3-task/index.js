/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  	let outStr = '';
  	if (str && str.length > 0)
  		outStr = str[0].toUpperCase() + str.slice(1);

  	return outStr
}
