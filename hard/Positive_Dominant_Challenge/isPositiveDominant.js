/*

Positive Dominant
An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.

*/

function isPositiveDominant(a) {
    /*----=^.^=-- 1: Use the Set() to create two arrays with unique values.---*/
    let positive = new Set();
    let negative = new Set();

    /*----=^.^=-- 2: Separate positive and negative and store in the respective variables.---*/
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            positive.add(a[i]);
        }
        if (a[i] < 0) {
            negative.add(a[i]);
        }
    }
    /*----=^.^=-- 3: Compare the variables length.---*/
    return positive.size > negative.size;
}

console.log(isPositiveDominant([1, 1, 1, 1, -3, -4])) // false
console.log(isPositiveDominant([5, 99, 832, -3, -4])) // true
console.log(isPositiveDominant([5, 0])) // true
console.log(isPositiveDominant([0, -4, -1])) // false