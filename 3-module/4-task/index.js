/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {

	let filterUsers = users.filter(item => item.age <= age),
		resultArr = [];

	filterUsers.forEach(function (item, index, array){
		resultArr.push(`${item.name}, ${item.balance}`);
	});
	
	let resultStr = resultArr.join('\n');

	return resultStr
}
