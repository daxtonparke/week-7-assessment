const addToZero = (arr) =>{
    for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr.length; j++){
        console.log(arr[i],arr[j])
        if (arr[i]+arr[j] === 0){
            return true}
    }}
    return false
}
// O(n^2)
// console.log(addToZero([1,0]))

const hasUniqueChars = (string) =>{
    let spreadString = [... new Set(string)].join('')
    if(string === spreadString){return true}
    return false
}
// O(n)
// console.log(hasUniqueChars('neva'))

// bonus because i thought q3 said palindrome
const isPalindrome = (string) => {
let newString = string.replaceAll(' ','').split('').reverse().join('')
if (string === newString){
    return true
}
return false
}
// O(n)
// console.log(isPalindrome('hannah'))

const isPanagram = (string) =>{
    // let newString = [... new Set(string.replaceAll(' ', ''))]
    // if (newString.length === 26){
        // return true
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
    let answer = []
    let lower = string.toLowerCase().split('')
    for(let i=0; i<string.length; i++){
    for (let j=0; j<alphabet.length;j++){
        if(lower[i] === alphabet[j]){
            answer.push(lower[i])
        }
    }
}
 let newAnswer = [... new Set(answer)]
 console.log(newAnswer)
 if(newAnswer.length === 26){
     return true
 }
return false
}
// O(n)
// console.log(isPanagram('The quick brown fox jumps over the lazy dog!'))

const longestWord = (arr) => {
    let answer = arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i].length>answer.length){
            answer = arr[i]
        }
    }
    return answer.length
}
// O(n)
console.log(longestWord(['hi', 'hello']))