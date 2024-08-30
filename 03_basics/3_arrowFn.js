const user = {
    username:"hitesh",
    price:999,
    
    welcomeMessage: function(){
        console.log(this)    // Shows how current context changes
        console.log(`${this.username} welcome to website`)   // This defines the cureent context
    }
}


user.welcomeMessage()
user.username = "sam"  // Context change but is we don't use this they give hitesh everytime
user.welcomeMessage()



console.log(this)   // Empty global object


// function chai(){
//     let username = "hitesh"
//     console.log(this.username)  // It gives undefined because This only be used in objects not Functions
// }

// chai()



//// Arrow Function 

const chai = ()=>{
    let username = "hitesh"
    console.log(username)

}
chai()

// Basic  Arrow Function 

const addTwo = (num1,num2) =>{
    return num1+num2
}


console.log(addTwo(5,9))


// More Concepts

const addTwino = (num1,num2) => (num1+num2)
// If don't use retunrn or curly brackets please wrap up  parenthesis.

const addTwinoo = (num1,num2) => ({username: "hitesh"})




