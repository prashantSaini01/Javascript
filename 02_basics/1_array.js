let new_array = [1,2,3,4,4]


let myArr =  new Array(1,2,3,4,4)
// Shallow Copy - > Reference

console.log(myArr.length)
console.log(myArr[3])


// Array Methods


myArr.push(6)        // Push Operation add element in last 
console.log(myArr)

myArr.unshift(9) 
console.log(myArr)  // Add element from start

myArr.pop()       // Removes last element
console.log(myArr)


myArr.shift()      // Removes first element
console.log(myArr)  

 
console.log(myArr.includes(4))   // Gives true and False
console.log(myArr.indexOf(3))    // Tell the index

const newArr = myArr.join()  // Bind and change to the string
console.log(newArr)
console.log(typeof newArr)

console.log(myArr)
// Slice and Splice

const my1 = myArr.slice(1,3)  // Extract the slice part not conisder last indexing and not change the original one.
console.log(my1)
console.log(myArr)  // Original Array not change

const my2 = myArr.splice(1,3) // Extract the slice part conisder last indexing and also change the original one,
console.log(my2)
console.log(myArr)   // Original Array Change


