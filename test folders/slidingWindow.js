// Given an array of integers and a number, write a function called minSubarraySum,
// which finds the min sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array.
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is
// not.
// Please write this with time complexity of O(n) and space o(1)

const minSubarraySum = (arr, n) => {
    
    if(arr.length < n) return null;
    
    let tempMin = 0; // store temporary min
    let minSum = 0; // store temporary sum
    
    for (let i = 0; i < n; i++){ // FIRST WINDOW, the elements inside your window depends on what your n is.
        minSum += arr[i] // initialize the minSum as the sum of your first window
    }
    
    tempMin = minSum // set the initial value of tempMin equals to minSum, since you do not have another value aside from your minSum
    
    for (let i = n; i < arr.length; i++){ // where the sliding window starts
        // arr[i-n], it's because you will get the diff from the current value to its previous value, then add to the currentValue
        tempMin = tempMin - arr[i-n] + arr[i] // reassign the tempMin with the new value of our current window                  
        minSum = Math.min(minSum, tempMin) // get the minimumValue by comparing which is smaller
    }
    
    return minSum;
    
}

//Test Cases:
console.log(minSubarraySum([100,200,300,400], 2)) // 300
console.log(minSubarraySum([1,4,2,10,23,3,1,0,20], 4)) // 17
console.log(minSubarraySum([-3,4,0,-2,6,-1], 2)) // -2
console.log(minSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // -3
console.log(minSubarraySum([2,3], 3)) // null

//! ###################################################

/*

Write a function called longestSubstringInString, which accepts a string and
returns the length of the longest substring with all distinct characters.
Please write in time complexity of O(n)
*/
const longestSubstringInString = (str) => {
    
    let i = 0
    let counter = 1;
    
    for (let j = 1; j < str.length; j++){
        if (str[i] !== str[j]){
            i++
            counter++
        } else {
            str[i] = str[j]
        }
    } 
    return counter;
    
}
// Test Cases:
// longestSubstringInString('') 0
// longestSubstringInString('rithmschool') 7
// longestSubstringInString('thisisawesome') 6
// longestSubstringInString('thecatinthehat') 7
// longestSubstringInString('bbbbbb') 1
// longestSubstringInString('longestsubstring') 8
// longestSubstringInString('thisishowwedoit') 6