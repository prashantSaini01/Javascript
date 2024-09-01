// let myName = "Prashant     "

// console.log(myName.truelength)

let myHeros = ["thor","spiderman"]

let heroPower ={
    "thor": "hammer",
    "spiderman": "web",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }

}
Object.prototype.hitesh = function()
{
    console.log("hitesh")
}
heroPower.hitesh()


// Inheritance

const Teacher ={
    makeVideo: true
}

const TeachingSupport ={
    isAvailable : false
}

const TASupport ={
    makeAssigment:'Js assigment',
    fullTime : true,
    __proto__:TeachingSupport

}

let anotherUsername  = "ChaiAurCode"


// Basically hmna yaha sekha khud k custom method fn kasa bnta hai
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}
anotherUsername.trueLength()

"Saini".trueLength()