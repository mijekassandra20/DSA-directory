candles = [4, 4, 1, 3]

const tallestCandles = (candles) =>{
    
    let freqCounter = 0
  
    const max = Math.max(...candles)
  
     for(let i of candles){
       if( i === max){
         freqCounter ++
        }
    }

    return freqCounter
    
}

console.log(tallestCandles(candles))