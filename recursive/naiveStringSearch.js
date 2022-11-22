let long = 'omgsdaddaomgs'
let short  = 'omg';

// create a counter
// loop the longer string
// loop the shorter string
// if it doesn't match break out the inner loop
// if the characters do match, keep going
// if you complete the inner loop and find a match, increment the count
// return the count

const naiveSearch = (long, short) => {
    let count = 0;
    
    for (let i = 0; i < long.length; i++){
        for (let j = 0 ; j < short.length; j++){
            if (long[i] !== short[j]) break;

            if(j = short.length - 1 ){
                count++
            }
        }
    }
    return count;
}