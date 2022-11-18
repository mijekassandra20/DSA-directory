const performance = require('perf_hooks').performance

//! ##########################################################

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// const pushNmbertoArray1 = (arr, num) => {
//     const lastIndex = arr.length - 1
//     for (let i = 0; i < arr.length; i++) {
//         if (i === lastIndex) {
//             arr.splice(lastIndex - 1, 0, num)
//         }
//     }
//     return arr;
// }

// const pushNmbertoArray2 = (arr, num) => {
//     return arr.push(num);
// }

// const t0 = performance.now()
// pushNmbertoArray1(arr1, 21)
// const t1 = performance.now()
// console.log(`Time to complete: ${(t1 - t0) / 1000}`);

// const t2 = performance.now()
// pushNmbertoArray2(arr1, 21)
// const t3 = performance.now()
// console.log(`Time to complete: ${(t3 - t2) / 1000}`);

//! ##########################################################

//! Constant Time Complexity O(1)

// ex.1 
// arr1.push(1)

// ex.2 get index
// arr1.indexOf(3)

// ex.1 
// const twoSum = (num1, num2) => {
//     return num1 + num2
// }

//! Log Time Complexity O(logn n)

// const logtTime = (arr) => {
//     let numberOfLoops = 0;

//     for (i = 1; i < arr.length; i *= 2) {
//         numberOfLoops++
//     }

//     return numberOfLoops
// }

// console.log(logtTime(arr1))

//! Linear Time Complexity

// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr[i])
// }

// while (arr1.length < 10) {
//     console.log(arr1)
// }

// arr1.forEach(num => console.log(num));

// arr1.map(num => num * 2)

// arr1.find(num => num < 10)

// arr1.filter(num => num !== 3)

//! Quadratic Time Complexity

// for (let i = 0; i < arr1.length; i++) {
//     for (j = 1; j < arr1.length; j++) {

//     }
// }

// for (let i = 0; i < arr1.length; i++) {
//     const newArr = arr1.map(num => num * 2)
// }

// for (let i = 0; i < arr1.length; i++) { // O(n)
//     for (j = 1; j < arr1.length; j *= 2) { // O(log n)

//     }
// }

//! Factorial Time Complexity 

// const factorial = (n) => {
//     let num = n;

//     if (n === 0) return 1;
//     for (let i = 0; i < n; i++) {
//         num = n * factorial(n - 1); // num = 5 * 4 * 3 * 2 * 1
//     }

//     return num;
// }

// console.log(factorial(5)) // 120

//! n + n = 2n
// const doSomething = (arr1) => {
//     for (let i = 0; i < arr1.length; i++) {

//     }

//     for (j = 1; j < arr1.length; j++) {

//     }
// }

//! consolidating time complexity

// const someFunction1 = (arr1) => {
//     let sum = arr[1] + arr[2]; // O(1)

//     while (condition) { // O(n) * O(1) = O(n)
//         sum = arr[5] + arr[6]
//     }

//     for (let i = 0; i < arr.length; i++) { // n 
//         for (let j = i + 1; j < arr.length; i++) { // n

//         } // n^2
//     }
//     // 1 + n + n^2 ---> n + n^2 ---> n^2
//     // 1 + n + 2n^2 ---> n + 2n^2 ---> n^2 - drop the constant
// }

// const someFunction2 = (arr1) => {
//     arr1.push(1).pop() // 1

//     for (let j = 1; j < arr1.length; j++) { // n

//     }

//     for (let j = 1; j < arr1.length; j++) { // n

//     }

//     for (let j = 1; i < arr.length; j++) { // n 
//         for (let j = 1; j < arr.length; i++) { // n
//             for (let j = 1; j < arr.length; i++) { // n
//             }
//         }
//     } // n^3
// }
// // 1 + n + n + n^3 = n^3

//! space complexity

// constance space O(1)

// 1
// true
// undefined
// null

// linear space O(n)
// 'this is a text'

const object = {
    name: 'tony'
}

//! OBJECT methods

// inserting
object.age = 44; // constant time complexity O(1)

// deleting
delete object.age // constant time complexity O(1)

// searching
object.hasOwnProperty['name'] // linear time complexity O(n)

for (const prop in object) {
    console.log(object[prop]) // linear O(n)
}
// accessing
object.age // constant time complexity O(1)

// retrieve keys
Object.keys(object) // linear O(n)

// retrieve values
Object.values(object) // linear O(n)

//! ARRAY methods

const arr2 = [1, 2, 3, 4, 5]

arr2.push(8) // constant O(1)

arr2.unshift(8) // linear O(n)

arr2.pop() // constant O(1)

arr2.shift // linear O(n)

// searching
const findNumber = arr2.find(num => num ===2) // linear O(n)

// retrieving
const getNumber = arr2[4] // constant O(1)

// splice 
arr2.splice(1, 1, 5) // linear O(n)

// reduce
arr2.reduce((total, num) => total + num, 0) // linear O(n)

//

//! ##########################################################


// const arr = [2, 3, 1, 5];

// const sortArray = (arr) => {
//     return arr.sort()
// }

// const sortArray2 = (arr) => {
//     const sortedArray = []

//     for(let i = 0; i < arr.length; i++){
//         for(let j=i+1;j <arr.length; i++ ){

//         }
//     }
// }

// console.log(sortArray(arr));
// console.log(sortArray2(arr));