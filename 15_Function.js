function sayMyName(){
  console.log("Hello Nitesh");
}

//sayMyName() // Execution or sayMyName <- reference

function addTwoNumber(number1, number2){
  return number1 + number2
}

const result = addTwoNumber(5 , 3)
// console.log("Result :: " + result);

function loginUserMessage(username = "example"){
  if(!username){
    console.log('Please enter a username.');
    return
  }
  return `${username} just logged in.`
}

const loginUser = loginUserMessage("Nitesh");
console.log(loginUser);

