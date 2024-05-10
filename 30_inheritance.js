class User{
  constructor(username){
    this.username = username
  }
  logme(){
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User{
  constructor(username,email,password){
    super(username)
    this.email = email
    this.password = password 
  }
  addCousese(){
    console.log(`New Courser add by ${this.username}`);
  }
}

const chai = new Teacher("chai","chai@gmail.com","123")
chai.addCousese()
const  masalachai = new User('Masalachai')
masalachai.logme()

// console.log(chai instanceof Teacher);