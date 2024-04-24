const myArr = [0, 1, 2, 3, 4, 5]
const myHero = ["saktiman","Khesari","Katrina"]

const myArr1 = new Array(1,2,3,4,5);
console.log(myArr[1]);

/* Array Method **
 * 
 * myArr.push()            -> add the Element from the End.
 * myArr.pop()             -> it will remove the Element from The Last.
 * myArr.unshift()         -> it will add a new Element at the beginning.
 * myArr.shift()           -> it will Remove Element from the bignning.
 * myArr.slice(start,end)  -> it returns Sub-Part of the array. and it exclude last index means end
 * myArr.splice(start,end) -> it returns Sub-Part of the array. but it include last index also menas end.      
 * 
*/

myArr.push(8)
myArr.pop()
myArr.unshift(11)
myArr.shift();

console.log(myArr);

console.log(myArr.includes(9)); // boolean type
console.log(myArr.indexOf(9)); // -1 

const newArr = myArr.join() // datatype String ban jata hai
console.log(newArr);

console.log("A" , myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);

/** Difference Between splica and slice */
/** slice print the some portion of the array without including last index. and it doesn't mainupulate the original array 
 * but splice mainuplulate the original array and they remove Sub-Part including last index and 
 * return.
 * 
 * eg :: [1,2,3,4,5]
 * slice(1,3) // ans -> [2,3]
 * and Actuall array will remain same :: [1,2,3,4,5]
 * splice(1,3) // ans -> [2,3,4]
 * but here Actuall array will change and become :: [1,5]
 * 
*/