// for of

const arr = [1,2,3,4,5]
for (const num of arr) {
  // console.log(num);
}

const greeting = "Hello World!"
for(const greet of greeting){
  // console.log(`Each char is ${greet}`);
}

// Maps 
const map = new Map()
map.set('IN',"India")
map.set('USA', "United State of America")
map.set('FR',"France")
map.set('IN',"India")

// console.log(map);

for (const [key,value] of map) {
  // console.log(key, " :- ", value);
}

const myObject = {
  js:'javascript',
  cpp: 'c++',
  rb: 'ruby',
  swift: "Swift by apple"
}

// for (const [key,value] of myObject) {
//   console.log(value); // error this is work mostly on array
// }

for (const key in myObject) {
  // console.log(myObject[key]);
}

// array for each
const coding = ['js', 'rb', 'java', 'python', 'cpp']
coding.forEach(function (val){
  console.log(val);
})

