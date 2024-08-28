const marvel_heros = ["thpr","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)  // It push whole dc array in place of merging

// console.log(marvel_heros)

// let new_heros = marvel_heros.concat(dc_heros)  // It return a new array after concationation
// console.log(new_heros)


// Spread Operator -> Spread Each element

const all_new_heros = [...marvel_heros,...dc_heros] // Prefer rather than concat beause it handle more inputs
console.log(all_new_heros)



const another_array = [1,2,3,[4,5,6],7,[7,8,[9,10]]]

const real_another_array = another_array.flat(Infinity) // gives a array which have all elements spread

console.log(real_another_array)





console.log(Array.isArray("Hitesh"))  //  Tells that is array or not
console.log(Array.from("Prashant")) // Converts into the array


console.log(Array.from({name : "Prashant"})) // Interesting case need to tell that how array created like in keys otherwise they give empty array




let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))  // Also helps to create array