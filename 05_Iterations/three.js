// for of loop Array Specific


// ["","",""]
// [{},{},{}]


const arr = [1,2,3,5,5]

for (const i of arr){    // i is the value in arr
    console.log(i)
}

const greetings = "Helllo Worlkd"

for(const i of greetings){
    console.log(i)
}


// Maps  -> Hold key value pairs , remember the original insertion order of the keys  // Hold unique values
// Map is iterable but not iterable in loops

const map = new Map()
map.set("name","John")
map.set("age",30)
map.set("city","New York")

console.log(map)

for ( const [key,value] of map){
    console.log(key,"-",value)
}

const myObject = {
    name:"John",
    age:30,
    city:"New York"

}

// Object is not iterable 

