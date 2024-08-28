const score = 400
console.log(score)

const balance = new Number(100) // Explicit define DataType
console.log(balance)


console.log(balance.toString()) // Convert it into string
console.log(balance.toString().length) 

console.log(balance.toFixed(2)) // Give value to two decimal points


const anotherNumber =  123.9866

console.log(anotherNumber.toPrecision(3)) // Basically round off work


const hundreds = 10000
console.log(hundreds.toLocaleString('en-IN'))



// *********************** Maths **********************************

console.log(Math)

console.log(Math.abs(-4))

console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))


console.log(Math.random())

console.log(Math.round(Math.random()*10+1))