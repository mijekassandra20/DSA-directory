// Problem statement: Given a sorted (in ascending order) integer array nums of n elements 
// and a target value, write a function to search target in nums. 
// If target exists, then return its index, otherwise return -1.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4

// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Note:
// 1. You may assume that all elements in nums are unique.
// 2. n will be in the range [1, 10000].
// 3. The value of each element in nums will be in the range [-9999, 9999].

const binarySearch = (arr, target) => {
    let min = 0;
    let max = arr.length - 1;

    while (min < max) {
        let middleIndex = Math.floor((min + max) / 2);

        if (target === arr[middleIndex]) {
            return middleIndex;
        } else if (arr[middleIndex] < target) {
            min = middleIndex + 1;
        } else {
            max = middleIndex - 1;
        }
    }

    return -1;
}

// Problem 3: Binary search using recursion

const nums = [-1, 0, 3, 5, 9, 12]

const binarySearchRecursive = (arr, target, start = 0, end = arr.length - 1) => {

    // edge case
    if (start > end) return -1

    // find middle index
    let middleIndex = Math.floor((start + end) / 2);

    // if the middle element is the target, if so, return the target index

    if (arr[middleIndex] === target) return middleIndex; // base condition

    // if the middle element is smaller than target , move the start index to middle + 1

    if (arr[middleIndex] < target) {
        return binarySearchRecursive(arr, target, middleIndex + 1, max)
    } else {
        return binarySearchRecursive(arr, target, min, middleIndex - 1)
    }
}

console.log(binarySearchRecursive(nums))