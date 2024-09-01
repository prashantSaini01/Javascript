const user = {
    username: "hitesh",
    loginCounr :8,
    signedIn : true,
    getUserDetails: function(){
        console.log("Got user Detils from databse")
        console.log(`Username:${this.username}`)
        console.log(this)
    }

}

console.log((user.getUserDetails)())



function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
    

}

const userOne = new User("hitesh",12,true)
// new is constructor function wo har bar ek new instance deta hai
// without new keyboard purana wala instance overwrite ho jayega
// When i write new what happen  empty object created , constructed fn calll, inject, return ho jata h
const userTwo = new User("ChaiAurCode")

console.log(userOne)
console.log(userTwo)

