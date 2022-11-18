// Write a recursive function called palindrome which returns true
// if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

// palindrome('tony') // false
// palindrome('monkey') // false
// palindrome('tacocat') // true
// palindrome('sos') // true

const palindrome = (str) => {

    // EDGE CASES
    if (!str) return '';
    if (str.length === 1) return true

    if (str[0] === str[str.length -1]) {
        return palindrome(str.slice(1, -1).trim())
    } else {
        return false 
    }

}

console.log(palindrome('')) // ''
console.log(palindrome('tony')) // false
console.log(palindrome('race car')) // true
console.log(palindrome('monkey')) // false
console.log(palindrome('moom')) // true
console.log(palindrome('sos')) // true
