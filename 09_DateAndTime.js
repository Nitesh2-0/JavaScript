let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());

console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0 , 23)
// let myCreatedDate = new Date(2023, 0 , 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-01-2004")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();  // aaj 
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // convert
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday: 'long',
})