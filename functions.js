const addToZero = (arr) =>{
    // let answer = false
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr.length; i++){
            if(arr[i]+arr[j]===0){
                return true
            }
        }
    }
    return false
}
addToZero([1,2,3,4,5,-3])