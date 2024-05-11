function User(email, password){
  this._email = email,
  this._password = password

  Object.defineProperty(this,'email', {
    get: function(){
      return `${this._email.toUpperCase()}`
    },
    set:function(value){
      this._email = value
    }
  })

  
  Object.defineProperty(this,'password', {
    get: function(){
      return `${this._password.toUpperCase()}`
    },
    set:function(value){
      this._password = value
    }
  })

}

const chai = new User('chai@gmail.com',"chai")
console.log(chai.email);

/** Object Getter and Setter **/
const Users = {
  _email:'h@gmail.com',
  _password:"abc",

  get email(){
    return this._email.toUpperCase()
  },
  set email(value){
    this._email =value
  }
}

const tea = Object.create(Users)
console.log(tea.email);