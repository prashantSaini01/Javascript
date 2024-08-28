// Primitive Data Types

// 7 types : String,Number,Boolean,null,undefinded ,Symbol ,BigInt (Call by vlaue -> copy gives)


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail ; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)

const bigNumber  = 58546161649841986156n // In n represent bigInt










// Reference (Non-primitive -> reference given)

// Array , Objects, Functions

const heros = ["batman","ironman"]

let myObj1 = {
    name: "prashant",
    age: 22,
}

const myFunction = function(){
    console.log("Hello")
}


// *************************** Memories *******************************

// Stack(Primitive) -> Copy h original value nhi change hogi
// Heap(Non-Primitive) -> Reference h change to hogi

let myYoutubeName = "JJKlife"

let anothername = myYoutubeName
anothername = "Thrones"

console.log(anothername)
console.log(myYoutubeName)

let userOne = {
    email: "xyz@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "abc@google.com"

console.log(userOne)
console.log(userTwo)