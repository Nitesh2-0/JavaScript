let a = 300
if(true){
  let a = 10 
  const b = 20 
  console.log("Result ::  " + a);
  // var c = 30 
}

console.log(a);

/*** scope level ****/

function one(){
  const username = "Nitesh"
  function two(){
    const website = "youtube"
    console.log(username);
  }
  //console.log(website); // Error :- out of scope
  two()
}
// one()

if(true) {
  const username = "Hitesh"
  if(username === 'Hitesh'){
    const website = "youtube"
    console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);


// +++++++++++++++++++++ interesting +++++++++++++++++++
console.log(addOne(5)); // currect 

function addOne(num){
  return num + 1;
}

//addTwo(5) // Error Because of assgnied variable 
const addTwo = function (num){
  return num + 2;
}

console.log(addTwo(7));