/**
 * Add the elements of a table of numbers and return the result
 * @param {Number} array array of numbers to sum
 * @returns Returns the sum of all numbers
 */
const sum = (array) => {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

export default {sum};