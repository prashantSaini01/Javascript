let score = "33"
console.log(typeof(score))


let valueInNumber = Number(score) // Used for conversion if not possible to convert it forecfully convert and return NaN.
console.log(typeof valueInNumber)


// "33" => 33
// "33.abc" => NaN
// true => 1


//let isLoggedIn = 1
let isLoggedIn = ""

let booleanIsloggedIn = Boolean(isLoggedIn)

console.log(booleanIsloggedIn)

// 1 =>true
// "" => false
// "Prashant" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)



// *************************** Operations ****************************************

let value = 3
let negValue = -value
// console.log(negValue)

let str1 = "hello"
let str2 = " world"

let str3 = str1 + str2

console.log(str3)



console.log("1" + 2)
console.log(1+"2")
console.log("1" + "2")
console.log("1"+2+2)
console.log(1+2+"2")
console.log((3+4)*5 %3)


console.log(+true)
console.log(-true)
console.log(+"")



let num1,num2,num3

num1=num2=num3 = 2+2

// Postfix Increment
// let gameCounter = 100
// x = gameCounter++;
// console.log(gameCounter)
// console.log(x)

// Prefix Increment
let gameCounter = 100
x = ++gameCounter;
console.log(gameCounter)
console.log(x)