// Creations  of Promises

const promiseOne = new Promise(function(resolve,reject){
    // Do any async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log("ASYNC task complete")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise 1 consumed")
})


new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Async Task 2 ")
    resolve()
},1000)
    
}).then(function(){
    console.log("Promise 2 consumed")
})




const promiseThree =  new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Prashant",email:"sainiprashant300@gmail.com"})
    },1000)
}).then(function(user){
    console.log(user)
})





const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Siddharth",password : "Saini"})
        }
        else{
            reject("Error")
        }
    },1000)

}).then(function(user){
    console.log(user)
    console.log("User Found Successfully")
}).catch(function(){
    console.log("Error Occured")
}).finally(function(){
    console.log("Promise Rejected or Accepted")    
})




const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Javascript",password : "1234"})
            }
            else{
                reject("Error")
            }
        },1000)
})

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response)
    
   } catch (error) {
    console.log("Error Found")
   }
}

consumePromiseFive()



// // Practical example 

// async function getAll_users(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)

//     } catch (error) {
//         console.log('Error',error)
//     }
// }
// getAll_users()

// **************in then and catch method

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log('Error',error)
})