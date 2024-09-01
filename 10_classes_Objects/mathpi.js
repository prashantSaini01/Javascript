// Enumerate Rok sakta hai or Value bhi change kar sakta hai PI ke bhi



const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(Math.PI)
console.log(descripter)



const chai ={
    name: 'ginger',
    price:250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))


Object.defineProperty(chai,"name",{
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"))
