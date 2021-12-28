const addToZero = (arr) =>{
    for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr.length; j++){
        console.log(arr[i],arr[j])
        if (arr[i]+arr[j] === 0){
            return true}
    }}
    return false
}
// console.log(addToZero([1,-1]))


const hasUniqueChars = (string) =>{
    let spreadString = [... new Set(string)]
    let splitString = string.split('')
    let spreadWord = spreadString.join('')
    let splitWord = splitString.join('')
    console.log(spreadWord,splitWord)
if(splitWord === spreadWord){
    return true}
    return false
}

console.log(hasUniqueChars('neva'))