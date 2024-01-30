/**
 * Напишите функцию sum(n) возвращающую положительное целое число – сумму чисел,
 * расположенных между 1 и N включительно.
 *
 * Пример:
 *
 * sum(0) === 1
 * sum(5) === 15
 *
 * Больше примеров в тестах
 *
 * @param {number} n целое число
 * @returns {number}
 */
function sum(n) {
    let allSum = null;
    // for (let i = n; i >= 1; i--) {
    //     allSum += i;
    //     if (i === 1) {
    //         break; 
    //      }
    // }
    for(let i = 0; i <= n; i++) {
        allSum += i;
    }
    return allSum;
}

module.exports = sum;

console.log(sum(5));
console.log(sum(12));
console.log(sum(9));
console.log(sum(15));
console.log(sum(30));