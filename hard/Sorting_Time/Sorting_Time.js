/*
Sorting Time
JavaScript has a beautiful built-in function sort that sorts an iterable, usually an array of numbers, sorting them in ascending order, but using a block you can sort the iterable in different ways.

    Create a function that takes an array of integers as an argument and returns the same array in ascending order. Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.

    Notes
    * The arrays can contain either positive or negative elements.
    * The arrays will only contain integers.
    * The arrays won't contain duplicate numbers.
This is a challenge to enhance your ability, using the sort built-in won't enhance your skills.

*/

/*-----------=^.^=--- Implementing Insertion Sort algorithm ---=^.^=------------------*/

/*
This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.
*/

function insertionSort(array) {
    let arr = array.slice();
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                const current = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = current;
            } else {
                break;
            }
        }
    }
    return arr;
}

/*-----------=^.^=--- Implementing Quick Sort algorithm ---=^.^=------------------*/

/*Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

    Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.*/

function quickSort(array) {
    if (array.length <= 1) return array;

    let pivot = array[array.length - 1];
    let leftArr = [];
    let rightArr = [];

    for (const ele of array.slice(0, array.length - 1)) {
        ele < pivot ? leftArr.push(ele) : rightArr.push(ele);
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]


    /*-----------=^.^=--------- Another way to solve it ------=^.^=------------------*/

    /* for (let i = 0; i < array.length - 1; i++) {
         if (array[i] < pivot) {
             leftArr.push(array[i]);
         } else {
             rightArr.push(array[i]);
         }
     }*/

    /*if (leftArr.length > 0 && rightArr.length > 0) {
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
    } else if (leftArr > 0) {
        return [...quickSort(leftArr), pivot];
    } else {
        return [pivot, ...quickSort(rightArr)];
    }*/

}

console.log(quickSort([2, -5, 1, 4, 7, 8])) //  ➞ [-5, 1, 2, 4, 7, 8]
console.log(quickSort([23, 15, 34, 17, -28])) //  ➞ [-28, 15, 17, 23, 34]
console.log(quickSort([38, 57, 45, 18, 47, 39])) //  ➞ [18, 38, 39, 45, 47, 57]