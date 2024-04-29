// if statement

let name = "Nitesh"
if(true){
  console.log(`This is the ${name} from if statement`);
}

const isUserLoggedIn = true
if(isUserLoggedIn){
  console.log(2 == "2");
}else{
  console.log("this come from else statement");
}

const score = 200
if(score > 100){
  const power = "fly"
  console.log(`User Power : ${power}`);
}

// console.log(`User power : ${power}`);

const balance = 1000

// if(balance > 500) console.log("test"), console.log("Shree");

if(balance < 500){
  console.log("Less Than 500");
}else if(balance < 750){
  console.log("less than 750");
}else if(balance < 900){
  console.log('less than 900');
}else{
  console.log(`Greater than 999`);
}


const userLoggedInFor = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(loggedInFromGoogle || loggedInFromEmail){
  console.log("User Allow");
}

const month = 30

switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("Mar");
    break;
  case 4:
    console.log("Apr");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("Jun");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("Aug");
    break;
  case 9:
    console.log("Sept");
    break;
  case 10:
    console.log("Oct");
    break;
  case 11:
    console.log("Nov");
    break;
  case 12:
    console.log("Dec");
    break;

  default:
    console.log("Out of Range");
    break;
}

const userEmail = "Nitesh@gmail.com"

if(userEmail){
  console.log("We got the user email.");
}else{
  console.log("Don't got the user email.");
}

/*** 
 * falsy values
 * false , 0 , -0 , bigInt-On, "" , null, undefined,NaN
 * 
 * Truthy values
 * '0','false', " ", [], {}, function(){}
 */

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
  console.log("Object is Empty.");
}

// Nullish Coalescing Operator (??) : null undefined

let val1; 
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);

//Turnery Operator

// condition ? true : flase
const iceTeaPrize = 100
iceTeaPrize <= 80 ? console.log("Less than 80"): console.log("More than 80");