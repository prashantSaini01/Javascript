// if 


if(true){

}

if(false){

}

const temp = 41

if (temp <50){
    console.log("Less than 50")
}
else{
    console.log("Greater than or equal to 50")
}


// const scrore = 200

// if(scrore > 100){
//     const power = "fly"
//     console.log(`User Power: ${power}`)
// }

// console.log(power)   // Basically check the scope



// Short hand notation

const balance = 100 
if(balance >500) console.log("test"), console.log("test2");

else(console.log("test pass"))





const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("Allow to buy course")
}