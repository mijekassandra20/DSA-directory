const lengthOfLastWord = (s) => {
    
    let result = s.trim().split(" ")
    lastIndex = result[result.length - 1]
    return lastIndex.length
    
}

console.log(lengthOfLastWord("Hello World"))