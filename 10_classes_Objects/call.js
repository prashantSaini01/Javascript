function SetUserName(usernmae){
    this.usernmae = usernmae;
}

function createUser(usernmae,email,password){
   SetUserName.call(this,usernmae)
    //.call to hold refernece
    // call hamara current executaion context kisi or ko transfer kar deta hai
    this.email= email
    this.password = password
}

const chai = new createUser("chai","xyz@.com",123)
//   we call the setusername but don't perform actually call is not done we use another method name .call
console.log(chai)