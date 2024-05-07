const user = {
  username: 'Hitesh',
  loginCount : 8,
  signedIn : true,
  getUserDetails : function(){
    // console.log("Got use details from the database");
    // console.log(`Username :: is defined ${this.username}`);
    console.log(this);
  }
}

// console.log(user.loginCount);
// console.log(user.getUserDetails());


//Constructor Function 

// const promiseOne = new Promise()

function User(username, loginCount, isLoggedIn){
  this.username = username,
  this.loginCount = loginCount,
  this.isLoggedIn = isLoggedIn
  // return this  // :: likho chahe mt likho retuen to hoga
}

const userOne = new User("hitesh", 12, true)
const usertWO = new User("hmitesh", 12, true)
console.log(userOne);
console.log(usertWO);
// console.log(userOne.constructor());