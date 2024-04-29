// for
let array = [5,8,9,10]
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  // console.log(element);
}

for(let i=1; i<=10; i++){
  // console.log(`Outer loop value ${i}`);
  for(let j=1; j<=10; j++){
    // console.log(`Inner loop value is ${j}`);
    // console.log(i + " * " + j + ' = ' + i*j);
  }
}

let myArray = ["flash","batman","superman"]

for (let index = 0; index < myArray.length; index++) {
  // console.log(myArray[index]);
}

// break and continue

for(let indx = 1; indx <= 20; indx++){
  if(indx == 5) {
    // console.log(`Detected 5`);
    break;
  }
  // console.log(`This value of i is ${indx}`);
}

for(let indx = 1; indx <= 20; indx++){
  if(indx == 5) {
    // console.log(`Detected 5`);
    continue;
  }
  // console.log(`This value of i is ${indx}`);
}

/*** While and Do-While Loop ***/
let index = 0
while (index <= 10) {
  // console.log(`Value of index is ${index}`);
  index += 2; 
}

let i = 0
while(i < myArray.length){
  // console.log(myArray[i]);
  i++;
}

let score = 11;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);