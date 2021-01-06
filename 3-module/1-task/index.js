/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  // ваш коду...
    let userName = [];

  	users.forEach((item, index, array) => {
	   (item.name) ? userName.push(item.name) : ''
	});

	//let lengths = users.map(item => item.name); //отработает некорректно если свойства name в объекте нет

  return userName;
}
