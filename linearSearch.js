const arr1 = [2, 44, 55, 88, 2];

const linearSearch = (arr, target) =>{
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i
    }
    return -1;
}

console.log(linearSearch(arr1, 55))

const findNumber = arr1.find(num => num === 55)
console.log(findNumber)

const findIndex = arr1.indexOf(55)
console.log(findIndex)

