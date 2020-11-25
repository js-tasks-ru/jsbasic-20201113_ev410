/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
	var result = true;

    if (typeof obj == 'object'){
    	for (let key in obj){
            if (typeof key != 'undefined') {
            	result = false;
            	break;
            }
        }
    }

    return result;
}