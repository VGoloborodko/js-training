/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    let one = 0;
    let two = 0;

    const arr = number.split('');
    
    for(let i = 0; i < arr.length; i++) {
        if (i < 3) {
            one += +arr[i];
        }  else {
            two += +arr[i];
        }
    }
    
    if (one === two) {
        return true;
    } else {
        return false;
    }
}

console.log(checkTicket('005212'));
console.log(checkTicket('133700'));
console.log(checkTicket('123032'));

module.exports = checkTicket;
