function calculateCartPrize(...num1){ // sperade or rest operator
  return num1
}

console.log(calculateCartPrize(4,100,100,770,88));

const user = {
  username : "Nitesh",
  price:199
}

function handleObject(anyObject){
  console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
  username:"Sam",
  price:999
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log([88,88,44]);