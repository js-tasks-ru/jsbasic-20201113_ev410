/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  // ваш код...
    let arr = str.split('-'),
  	result = '';
  	arr.forEach(function(item, index, arr){ 
 		(item.length > 0 && index > 0) ? arr[index] = item[0].toUpperCase() + item.substring(1,item.length) : '';
  	});
  result = arr.join('');
  return result;
}
