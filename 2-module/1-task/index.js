/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
    let sumResult = 0;

    for (let key in salaries) {
        sumResult +=  (((typeof salaries[key]) == 'number') ? salaries[key] : 0);
    }

    return sumResult;
}