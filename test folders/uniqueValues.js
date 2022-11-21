// MULTIPLE POINTERS

let arr1 = [1,2,3,4,4,5,6,6,6,6,7,8] 

const uniqueValues = (arr) => {
    
    if(!arr) return 0
    
    let i = 0
    
    for (let j = 1; j < arr.length; j++){
        if (arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1



}
console.log(uniqueValues())
console.log(uniqueValues(arr1)) // return 8