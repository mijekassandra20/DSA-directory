const arr = [12, 3, 14, 18, 2, 7, 9]

const javaScriptMethod = (arr) => {
    arr.sort((a,b) => a - b)

    return arr
}

console.log(javaScriptMethod(arr))