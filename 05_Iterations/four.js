const myObject ={
    JS :"JAVASCRIPT",
    CPP: "C++",
    rb: "Ruby"
}

// For in loop used to iterate for objects

for(const key in myObject){
    console.log(`Keys is ${key} and values is ${myObject[key]}`)

}

let myArray = [1,2,34]
for (let key in myArray){
    console.log(myArray[key])
}

// IN loop --> gives indexes or Keys
// OF loop --> gives values and actual element present in data