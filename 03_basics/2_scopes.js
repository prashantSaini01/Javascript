// let a = 10
// const b =20 
// var c = 30


if(true){                          // {Functional scope }
    let a = 10
const b =20 
var c = 30
 
}

// console.log(a)
// console.log(b)
console.log(c)


// for(let i=0;i< array.length;i++){
//     const element = array[i];

    // i variable  in block scope
// }
// All variables declare outside of any function and loop are declared in global scopes.



function one (){
    const username = "Prashant"
    function two(){
        const website = "youtube"
        console.group(username)
    }
    // console.log(website)

    two()
}

one ()



if (true){
    const username = "hitesh"
    if(username ==="hitesh"){
        const  website = "youtube"
        console.log(username +  website)
    }
    // console.log(website)
}

// console.log(username)


// ++++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++

function addOne(num){  // That type of function also callable just after declaration because they declaration is one top.
    return num +1
}

addOne(5)

const addTwo = function(num){     // This type of function also called Expression andd they not called before declaration.
    return num +2
}

console.log(addTwo(5))