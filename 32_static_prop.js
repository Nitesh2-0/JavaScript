class User {
  constructor(username){
    this.username = username
  }
  logMe(){
    console.log(`uUsername  ${this.username}`);
  }
  static cerateId(){ // stop sharing id outof class
    return `123`
  }
}

const Nitesh  = new User("Nitesh")
// console.log(Nitesh.cerateId());

class Teacher extends User {
  constructor(email, username){
    super(username)
    this.email = email
  }
}

const iphone = new Teacher("iphone@gmail.com",'Iphone')
console.log(iphone.logMe());
// console.log(iphone.cerateId());