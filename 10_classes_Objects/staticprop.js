class User{
    constructor(username){
        this.username = username;

    }
    logMe(){
        console.log(this.username);
    }
    static createId(){
        return `123`
    }
}

const hitesh = new User("Hitesh")

// console.log(hitesh.createId())



class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email =email
    }
}

const iphone = new Teacher("iphone","i@ontouchcancel.com")
iphone.logMe()


console.log(iphone.createId());