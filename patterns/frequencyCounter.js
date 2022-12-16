/* 
Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value squared in the second array. 
The frequency of values must be the same.
 */

const same = (arr1, arr2) => {
    // check edge cases
    if (arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for ( let num of arr1) {
        // setting the keys       // setting the values
        frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1
    }

    for ( let num of arr2) {
        // setting the keys       // setting the values
        frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1
    }

    for (let key in frequencyCounter1){
        // check if the key value is the squared value
        if (!(key * key in frequencyCounter2)) return false

        // check the values
        if(frequencyCounter1[key] !== frequencyCounter2[key * key]) return false

    }

    return true
}


console.log(same([1,2,3], [1,4,9])) // true
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,1], [4,4,1])) // false (must be same frequency)

/* {
    1: 1,
    2: 1,
    3: 1
} */

/* {
    4: 1,
    1: 1,
    9: 1
} */