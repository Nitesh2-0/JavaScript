const name = "hitesh Bhiya"
const repoCoount = 50; 

//String interpolation 
console.log(`Hello World, ${name} and my repo count is ${repoCoount}`);

const gameName = new String('Hitesh Kumar');

console.log(gameName);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'))

let newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-12, 4); // ignoring negative
console.log(anotherString);

const newString1 = "    Hitesh   Bhai  jay hind"
let ans = newString1.trim(newString1);
console.log(ans);

const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh')); // true
console.log(url.includes('Nitesh')); // false

const newStringThree = "Bharat Mata ki Jay"
console.log(newStringThree.split(' ')); // converted to the array
