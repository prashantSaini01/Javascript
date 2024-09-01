class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    // get karta time kaam ata h 
    get password(){
        return this._password.toUpperCase() // name change karna pahta h warna race lag jayge
    }

    // set karta hai
    set password(value){
        this._password=value
    }
}
const hitesh = new User("@gmail.com","abc")

console.log(hitesh.password)
