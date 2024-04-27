const user = {
  username : "Nitesh",
  price: 999,
  //this is used to refere current context
  WelcomeMessage : function(){
    console.log(`${this.username} , welcome to website`);
    // console.log(this);
  }

}

// user.WelcomeMessage()
// user.username = "sam"
// user.WelcomeMessage()

//console.log(this); // Empty on Node Enviroment and on Browser Window

function chai(){
  let username = "Nitesh"
  //console.log(this.username); // undefined kuki ye keval object ke sath hi kam karega this
}

// chai()

const chai1 = () => {
  let username = "Nitesh"
  // console.log(this.username); // empty milega
}

chai1()


const addTwoNum = (num1 , num2) =>{
  return num1 + num2
}

console.log(addTwoNum(3, 7));

// const addTwoNums = (num1, num2) => num1 + num2; // implicit return
// const addTwoNu = (num1, num2) => (num1 + num2);

const addTwo = (num1 , num2) => ({username:"Nitesh"})