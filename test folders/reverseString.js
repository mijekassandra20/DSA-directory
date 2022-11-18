// Write a recursive function called reverseString which accepts a string and returns a new stringin reverse.
// reverseString('tony') // 'ynot'
// reverseString('baker') // 'rekab'

function reverseString(str){
    if(!str) return '';

    return reverseString(str.slice(1)) + str[0]
    
}

console.log(reverseString()) 
console.log(reverseString('tony')) // ynot
console.log(reverseString('baker')) // rekab