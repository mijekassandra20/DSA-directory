// Write a recursive function called capitalizeTheFirst. 
// Given an array of strings, capitalize the first letter of each string in the array

const capitalizeAllLetters = (array) => {
    
    if (!array.length) return [];
    
    capitalized = array[0].toUpperCase()
    return [capitalized].concat(capitalizeAllLetters(array.slice(1)))

}

console.log(capitalizeAllLetters(['you', 'make', 'me', 'feel', 'special']));