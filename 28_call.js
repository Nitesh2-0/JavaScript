function SetUserName(username){
  //complex DB calls
  this.username = username
  console.log('Called');
}

function createUser(username, email, password){
  // SetUserName(username) // ye javascript me reference gay call nahi huaa technically
  SetUserName.call(this,username) // now called --> reference store karene keliye use karte hai is or bind ko bhi -> lekin object gay ho ja rah hai 
  // this obect ko change karega
  this.email = email,
  this.password = password
}

const chai  = new createUser('Cahi',"a@gmail.com","123")
console.log(chai);