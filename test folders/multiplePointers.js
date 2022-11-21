/*
Using the multiple pointers pattern, write a function called, areThereDuplicates which accepts a
array of letters,
and checks whether there are any duplicates among the argument passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
Please implement with time & space complexity of O(n)

*/
const areThereDuplicates = (arrOfLetters) => {
    
    if (!arrOfLetters) return false;
    
    start = 0
    end = arrOfLetters.length - 1
    
    while (start < end) {
        if(arrOfLetters[start] === arrOfLetters[end]){
            return true
        } else if (arrOfLetters[end] === arrOfLetters[end + 1]){
            return true
        } else{
            end--
        }
    } 
    return false;
}

// Tests
console.log(areThereDuplicates(['a', 'a', 'c', 'd'])) //true
console.log(areThereDuplicates(['a', 'b', 'c'])) // false
console.log(areThereDuplicates(['a', 'b', 'c', 'c', 'd', 'e'])) // true

// ! #########################################################################

/*
Using multiple pointers pattern, write a function called avgPair.
Given a sorted array of integers and a target average, determine if there is a pair of values in
the array
where the average of the pair equals the target average.
There may be more than one pair that matches the average target.
Please implement with time complexity of O(n) and space O(1)
*/

const avgPair = (arr, avgTarget) => {

    let start = 0;
    let end = arr.length - 1

    while (start < end) {
        avg = (arr[start] + arr[end]) / 2
        
        if (avg === avgTarget){
            return true;
        } else if (avg < avgTarget){
            start++
        }
        else {
            end--
        }
    } return false

}
console.log(avgPair([1,2,3], 2.5)) // true
console.log(avgPair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(avgPair([-1,0,3,4,5,6], 4.1)) // false
console.log(avgPair([],4)) // false

// ! #########################################################################

/*
Write a function called subsequence which takes in two strings and checks whether
the characters in the first string form a subsequence of the characters in the second string.
In other words, the function should check whether the characters in the first string
appear somewhere in the second string, without their order changing.
Write your solution with time complexity O(n) and space O(1)
*/

const subsequence = (str1, str2) => {
    
    if(str1.length > str2.length) return false
    
    i = 0; // initialize i for str1.length
    j = 0; // initialize j for str2.length
    
    while(i < str1.length && j < str2.length ){
        if(str1[i] === str2[j]){    // if both i and j are equal
            i++ // increment to move the pointer for str1 
        } else {    // if not equal
            j++ // increment to move the pointer for str2
        }
    }
    return i === str1.length  /* i indicates that your pointer for the str1 is already at the end, 
    and that it already finish going through each elements inside the str1 string */

}

console.log(subsequence('hello', 'hello world')) //true
console.log(subsequence('sing', 'sting')) //true
console.log(subsequence('abc', 'abracadabra')) //true
console.log(subsequence('abc', 'acb')) //false
