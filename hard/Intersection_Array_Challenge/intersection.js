/*

Learn Lodash (1): Intersection of Arrays

Write a function that creates an array of values found within all given arrays. The first array will serve as the base from which the remaining arrays will be checked to see if they have the matching values. If they do they will be added to the new array which will return only unique values showing the "intersecting" values of all arrays.

The actual intersection lodash function uses "Same Value Zero" comparison which means that it only works on strings and numbers. To make this challenge more difficult I've included objects to help you determine how to compare them.

*/

function intersection(...a) {
    let flatten = a
        .map((e) => {
            return e.map((e2) => JSON.stringify(e2))
        })
        .map((e) => new Set(e))
        .map((e) => Array.from(e))
        .flat(2);

    return Array.from(new Set(flatten.filter((num, index) => flatten.indexOf(num) !== index)))
        .map((e) => JSON.parse(e))
        .sort((a, b) => a - b);
}

console.log(intersection([1, 2, 3], [3, 4, 5], [2, 9, 9])) // [2, 3]
console.log(intersection([1, 2, 3], [3, 4, 5], [3, 6, 7])) // [3]
console.log(intersection(
    [
        {
            color: "red",
            make: "toyota",
        },
        {
            color: "blue",
            make: "mazda",
        },
    ],
    [
        {
            color: "green",
            make: "tesla",
        },
        {
            color: "blue",
            make: "mazda",
        },
    ],
    [
        {
            color: "yellow",
            make: "ford",
        },
        {
            color: "blue",
            make: "mazda",
        },
    ],
)) //[ { color: 'blue', make: 'mazda' } ]
