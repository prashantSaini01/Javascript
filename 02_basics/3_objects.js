// Singelton  --> create object through constructor -> Object.create()

// Object Literals --> Another way to create Objects
const mySym = Symbol("key1")

const JsUser = {
    name: 'John Doe',
    "full name" : "John John Doe",
    age: 30,
    [mySym]: "key1", // when i print it shows symbol(key)
    occupation: 'Software Engineer',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
        },
    isLoggedIn : false,
}

// Two ways to access objects

console.log(JsUser.name)
console.log(JsUser["name"])
console.log(JsUser["full name"])
console.log([mySym])


JsUser.age = 10
console.log(JsUser)

// Object.freeze(JsUser) // Changes not propogate

JsUser.age = 25 // Ot throws error but not perform due to freeze

console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${JsUser.name}`)

}


console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())