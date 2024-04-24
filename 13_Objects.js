// Object Singleton or constructor ki help se

//const tinderUser = new Object() // singleton object
const tinderUser = {}
tinderUser.id=123
tinderUser.name = "sunny"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
  email:'someemail@gmail.com',
  fullname:{
    userfullame : {
      firstName:"Hitesh",
      lastname : "Haudhary"
    }
  }
}

// console.log(regularUser.fullname.userfullame.firstName);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",6:"b"}
const obj4 = {4:"a",5:"b"}

// const obje3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1,...obj2}
console.log(obj3);


const users =[
  {
    id:1,
    name:"nitesh"
  },
  {
    id:2,
    name:"Kuamr"
  }
]

console.log(users[1].name);
console.log(Object.keys(tinderUser)); // array milta hai
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));