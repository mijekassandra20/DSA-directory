const isAnagram = (str1, str2) => {
    
    if(str1.length !== str2.length) return false
    
    let sortStr1 = str1.split('').sort().join('')
    let sortStr2 = str1.split('').sort().join('')
    
    for(let i = 0; i < str1.length; i++){
        if(sortStr1[i] === sortStr2[i]) return true
    }
    
    return false
    
}

console.log(isAnagram('below', 'elbow'))

// anagram, countUniqueValues, sumZero, avgPair, longestWord, maxSubbaray, maxCharacter, occurences