// Write a recursive function called capitalizeTheFirst. 
// Given an array of strings, capitalize the first letter of each string in the array

const capitalizeFirstLetter = (array) => {
    
    if (!array.length) return [];
    
    capitalized = array[0].split('')
    capitalized[0] = capitalized[0].toUpperCase()
    result = capitalized.join('')
    return [result].concat(capitalizeFirstLetter(array.slice(1)))


}

console.log(capitalizeFirstLetter(['you', 'make', 'me', 'feel', 'special']));