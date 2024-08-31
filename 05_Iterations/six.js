const coding = ["js","python","ruby","cpp"]

// Actually For each function do not return Anything
// const values = coding.forEach((item)=>
// {
//     console.log(item)
// })

// console.log(values)


const myNumbers = [1,2,3,4,5,6,7,88,9,10]
// Filter function comes with the condition declared by you if you satify they will work

// const newNum = myNumbers.filter((num)=>(num>5))

// If we use curley brackets need to use return keyword
const newNum = myNumbers.filter((num)=>{return num>5})

console.log(newNum)

// Bina filter ka same kaam kese karta

// const newNums = []
// myNumbers.forEach((num)=>{
//     if(num>5)
//         newNums.push(num)
// })

// console.log(newNums)

