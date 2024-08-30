// const tinderUser = new Object()  Singeleton Object

const tinderUser = {}

tinderUser.id = "1234abc"
tinderUser.name = "John Doe"
tinderUser.age = 30
tinderUser.isLoggedIn = false

// console.log(tinderUser)


const regularUser = {
    email: "xyz@gmail.com",
    fullname : {
        userFullName:{
            firstname: "Prashant",
            lastname: "Saini"

        }
    }
}
// console.log(regularUser.fullname.userFullName.firstname) // ? is used if not exist to do this or this


const obj1 ={
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}

// const obj3 = Object.assign({},obj1,obj2)  // Used to merge two objects , {} -> work as target
const  obj3 = {...obj1,...obj2}  // Spread Operator

console.log(obj3)



const users = [
    {
        id: 1,
        email: "xyz"
    }
]

console.log(users[0].email)

console.log(tinderUser)


console.log(Object.keys(tinderUser)) //  Gives all the keys 
console.log(Object.values(tinderUser)) // Gives all the values

console.log(Object.entries(tinderUser)) //  Gives all the keys and values

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // Check they have these property or not.




const course ={
    courseName : "JS",
    price: "999",
    courseInstructor:"Prashant Saini"
}

// console.log(course.courseInstructor)

// Destructing Objects --> basically helps to annoy use course.courseInstructor

// const {courseInstructor} = course

// console.log(courseInstructor)

const {courseInstructor: Instructor} = course

console.log(Instructor)

//  Difference between Object and Json is that the keys in Json is string

// {
//     "name": "Prashant Saini",
//     "age": 25
// }