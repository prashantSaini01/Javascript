const userEmail ="hitesh@ai"

if(userEmail){
    console.log("Got the user email")
}
else{
    console.log("No user email")
}



// false values
// false , 0 , -0 , BigInt 0n, "", null , undefined , Nan


// Truthy Values
// true , "hitesh" , 1 , 1n , { } , [],"0" ,"false" , " " , function(){}


// How to check array is empty

if(userEmail.length ===0){
    console.log("Array is empty")
}

// How to check onject is empty

const emptyObj ={}

if (Object.keys(emptyObj).length==0){
    console.log("Object is empty")
}


// false ==0 -> true
// false ==" " -> true
// 0 == " " -> true


// Nullish Coalescing Operator(??) : null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 10
val1 = null ?? 10 ?? 15

console.log(val1)


//  Terinary Operator

// condition ? true : false

const iceTeaPrice = 100
let ans =  iceTeaPrice >=80 ? "buy" : "DON't buy"

console.log(ans)

