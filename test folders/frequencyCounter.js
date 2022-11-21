/* Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the 
majority element always exists in the array.
Please solve using a linear time complexity and using the frequency counter pattern

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2 */

const solution = (nums) => {

    if(!nums) return 0
    
    let freqCounter = {} // initialized an object to keep track of the frequency 
    
    for(let n of nums){ // iterate the elements inside the array
        if(!freqCounter[n]) { // if element is not in the object, initialize its value to 1
            freqCounter[n] = 1
        } else {
            freqCounter[n] =  freqCounter[n] + 1 // if element is in the object, add 1
        }
    }
    
    let getValues = Object.values(freqCounter) // access the values inside objects
    let max = Math.max(...getValues) // get the highest values
    
    for(let key in freqCounter){ // iterate the Objects freqCounter
        if (freqCounter[key] === max) return key // if value of a key is equal to max, return key
    }
}

console.log([3,2,3])
console.log(solution([2,2,1,1,1,2,2]))