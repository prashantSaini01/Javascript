const name = "prashant"
const repoCount = 50

console.log(name + repoCount + "Value") // Concatination

// Backticks use for concatiantion

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName =  new String('Prashant-Saini')
console.log(gameName[0])  //    0 is key


console.log(gameName.length) // Return size or length

console.log(gameName.toLocaleUpperCase())
console.log(gameName.charAt(2)) // according to key which character is ..
console.log(gameName.indexOf('i'))


const newString = gameName.substring(0,4)  // Last index value not included
console.log(newString) // 0 to 4 index value

const anotherString = gameName.slice(0,4) // Also works on negative parts
console.log(anotherString) // 0 to 4 index value


const newStringOne = "    sammar  "
console.log(newStringOne.trim()) // Remove extra space



const url = "https://xyz.com"

url.replace('/','//')

console.log(url)

console.log(url.includes('xyz'))


console.log(gameName.split("-"))