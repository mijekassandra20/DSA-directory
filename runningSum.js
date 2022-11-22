// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// 1. multiple pointers pattern NO
// 2. sliding window YES
// 3. frequency counter pattern
// 4. divide and conquer - binary Search NO
// 5. do your thing :) 

// /**
//  * @param {number[]} nums
//  * 
//  * @return {number[]}
//  */

// SLIDING WINDOW 

const runningSum = (nums) => {
  	// create a new array and the sum
  	const newArr = []
    let sum = 0;
  
    // use a for loop to have a running sum
  	for(let i = 0; i < nums.length; i++){
      // during the loop the new array plus index equals to new array
      sum+= nums[i];
      //use .push to add it to the new array
      newArr.push(sum)
    }
  
  return newArr; 
 	
};



// MAP
const runningSumMap = (nums) => {
	return nums.map((num, index, array) => {
    if (index === 0) {
			return num
    } else {
			array[index] = num + array[index - 1]
    }
  })
}

// [1, 2, 3, 4, 5]

// [1, 3, 6, 10, ]



                      










