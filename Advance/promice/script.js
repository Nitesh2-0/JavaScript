const promiseOne = new Promise(function (resolve, reject) {
  //Do an Async task
  // DB Calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consume");
});

// Two .........

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolve");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "chai", email: "chai@example" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "nitesh", password: "123" });
    } else {
      reject("ERROR : Something went Wrong.");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is resolve or rejected"))


const promiseFive = new Promise((resolve,reject)=>{
  setTimeout(() => {
    let error = true
    if(!error){
      resolve({username:"javascript", email:"example@latest"})
    }else{
      reject('ERROR :: Js went error')
    }
  }, 1000);
})

async function consumePromicefile(){
  try {
    const res = await promiseFive
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
consumePromicefile()

/**
 * Creating Promise =>
 */
