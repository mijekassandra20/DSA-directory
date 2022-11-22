const longestWord = (sentence) => {
    
    separate = sentence.split(' ')
    maxLength = 0
    
    for(let i = 0; i < separate.length; i++){
        maxLength = Math.max(maxLength,separate[i].length)
    }
    
    for (let i = 0; i < separate.length; i++){
        if(separate[i].length === maxLength) return separate[i]
    }
    
}

console.log(longestWord('Hi there my name is Brad'))