// Dates

let myDate = new Date()

console.log(myDate.toString())

console.log(myDate.toLocaleDateString())

console.log(myDate.toLocaleString())

console.log(myDate.toISOString())


console.log(typeof myDate)

// let myCreateDate = new Date(2023,0,23)

// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("11-07-2002")

console.log(myCreateDate.toDateString())


let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreateDate.getTime())


// If we want Seconds

console.log(Math.floor(Date.now()/1000))




let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())





newDate.toLocaleString('default',{
    weekday: 'long'})