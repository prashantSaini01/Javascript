function sayMyame (){
    console.log("My name is Ankit");
}

sayMyame() //   Here name defines the refrence and () they define i call the functions



function addTwoNumbers(a,b){  // Inputs in Functions is parameters and at the time of calling the function put arguments

    let result = a+b
    return  result
}

const result =  addTwoNumbers(3,5)

// console.log("Result:",result)



function loginUserMessage(username="sam"){ // If you not pass any argument it takes bydefault sam
    if (username===undefined){
        console.log("Please enter your username")
        return
    }

    return `${username} just logged in`
}

console.log(loginUserMessage("Prashant"))   // If you not passed any required arguments it Bydefault takes Undefined



function calculateCartPrice(...num1){   // Rest operator to handle not knowing no. of inputs
    return num1  // It makes num1 is array of [200,400,500]
}

console.log(calculateCartPrice(200,400,500))



const user = {
    username: "Samar",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}


handleObject(user)



const myNewArray = [200,400,100,600]

function retunSecondValue(getArray){
    return getArray[1] // It will return 400    
}

console.log(retunSecondValue(myNewArray))