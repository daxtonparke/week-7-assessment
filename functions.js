const addToZero = (arr) =>{
// let arr = [1,2,3,4,5]
    let answer = false
    for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr.length; j++){
        console.log(arr[i],arr[j])
        if (arr[i]+arr[j] === 0){
            return true}
    }}
    return false
}
console.log(addToZero([1,-1]))
