const addToZero = (arr) =>{
    for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr.length; j++){
        console.log(arr[i],arr[j])
        if (arr[i]+arr[j] === 0){
            return true}
    }}
    return false
}
console.log(addToZero([1,-1]))


const hasUniqueChars = (string) =>{
let spreadString = [... new Set(string)]
    let splitString = string.split('')
    console.log(spreadString,splitString)
    for(let i=0; i<string.length; i++){
    if (spreadString[i] !== splitString[i]){
        return false
    }
}
    return true
}

console.log(hasUniqueChars('moo'))