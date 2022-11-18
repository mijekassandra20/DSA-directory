const countDownFrom = (number) => {
    for (let i=number; i > 0; i--){
        console.log(i)
    }
}

countDownFrom(5)

const countDownRecursively = (number) => {
    if (!number) return;
 
    console.log('Recursion',number);
    countDownRecursively(number - 1)
}

console.log(countDownRecursively(5))

//example : iterative method

const factorialIterative = (num) => {
    let total = 1
    for (let i = num; i > num; i--) {
        total *= i
    }
    return total;
}

// example : recursive method


const factorialRecursive = (num) => {
    if (!num) return 1;

    return num * factorialRecursive(num - 1)

}

console.log(factorialRecursive(5))

// Problem 2: given an array of numbers, return a new array with just odd numbers

const arr1 = [1,2,3,4,5,6,7,8,9,10];

const collectOddValues = (arr) => {
    let newArr = [];

    if (!arr.length) return newArr;

    if (arr[0] % 2 !== 0) newArr.push(arr[0]);

    newArr = newArr.concat(collectOddValues(arr.slice(1)))

    return newArr;
}

console.log(collectOddValues(arr1))


