const coding = ['js','ruby','java','python','cpp']

const values = coding.forEach((item) => {
  // console.log(item);
  return item // koi value return nahi karta hai
})

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNums.filter((num) => num > 5)
// console.log(newNum);

const newNums = []
myNums.forEach((num) => {
  if(num > 5) newNums.push(num)
})

console.log(newNums);

let bookCollection = [
  {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      yearPublished: 1960,
      rating: 4.5
  },
  {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian Fiction",
      yearPublished: 1949,
      rating: 4.3
  },
  {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic Literature",
      yearPublished: 1925,
      rating: 4.2
  },
  {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      yearPublished: 1997,
      rating: 4.7
  }
];

const allBooks = bookCollection.filter((book) => {return book.yearPublished >= 1900})
// console.log(allBooks);

/* ++++++++ map ++++++++ */ 

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newN = myNumbers.map((number) => {return number + 10})
// console.log(newN);
let arr = []
myNumbers.forEach((number) => {
  arr.push(number+10)
})
// console.log(arr);


/*** Chaining  */

const newNumsPromis = myNumbers
                      .map((num) => num*10)
                      .map((num) => num + 1)
                      .filter((num) => num >= 40)
// console.log(newNumsPromis);


/*** Reduce Method  => callback with accumulator and currentvalue ***/
const array = [1,2,3,4,5,6]
// const myTotal = array.reduce(function (acc, currVal){
  // console.log(`acc ${acc} and currval : ${currVal}`);
  // return acc+currVal
// },0)
// console.log(myTotal);

const ans = array.reduce((acc, curr) =>  acc+curr, 0)
console.log(ans);


let shoppingCart = [
  {
      id: 1,
      name: "Laptop",
      price: 999.99,
      quantity: 1
  },
  {
      id: 2,
      name: "Headphones",
      price: 49.99,
      quantity: 2
  },
  {
      id: 3,
      name: "Mouse",
      price: 19.99,
      quantity: 1
  }
];

const amount = shoppingCart.reduce((acc, item) => acc + item.price,0)
console.log(amount);