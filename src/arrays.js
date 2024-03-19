import sumArray from "./sumArray.js";

const array1 = [2, 4];
const array2 = [1, 3, 5];
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * Returns a list of arrays
 */
const getArrayList = () => {
    return [array1, array2, array3];
}

/**
 * Calculate for each array its sum and log it into the console
 * @param {NUmber[]} arrays arrays of number to loop through
 */
const getSum = (arrays) => {
    for (let i = 0; i < arrays.length; i++) {
        const sum = sumArray.sum(arrays[i]);
        console.log(`La somme du tableau ${i + 1} est : ${sum}`);
    }
}

export default {getSum, getArrayList}