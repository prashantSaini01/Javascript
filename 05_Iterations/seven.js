const myNumbers = [1,2,3,4,5,6,7,8,9]

// const newNums = myNumbers.map((num)=>(num+10))

//  Filter -> Conditions
// // Map -> for All
// console.log(newNums)

// Chaining -> after one fumnction the result pass to another function without assign to the result 

const newNums = myNumbers.map((num)=>(num*10)).map((num)=>(num+1)).filter((num)=>(num>=40))

console.log(newNums)