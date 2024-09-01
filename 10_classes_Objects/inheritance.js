class User{
    constructor (Username){
        this.Username = Username;
    }

    logMe(){
        console.log(this.Username);
    }
}


class Teacher extends User{
    constructor (Username, email,password){
        super(Username);
        this.email = email;
        this.password = password;
    }


    addCourse(){
        console.log('Course Added');
    }
}


const chai = new Teacher("chai","xyz","123")

chai.addCourse()


const masalachai = new User("masalaChai")

masalachai.logMe()


console.log(chai instanceof Teacher)