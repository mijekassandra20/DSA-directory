// Write a recursive function called flatTheArray which accepts an array of arrays
// and returns a new array with all values flattened.

// flatTheArray([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatTheArray([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatTheArray([[1],[2],[3]]) // [1,2,3]
// flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

const flatTheArray = (arr) => {

    if (!arr) return;

    let newArr = []

    for (let i of arr){
        if(typeof i === 'number'){
            newArr.push(i)
        } else {
            newArr = newArr.concat(flatTheArray(i))

        }
    }
    return newArr;

}

console.log(flatTheArray([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatTheArray([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatTheArray([[1],[2],[3]])) // [1,2,3]
console.log(flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]