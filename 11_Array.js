const marvel_heros = ["thor",'ironman','spiderman']
const dc_heros     = ['superman','badman','flash']

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

//sprade operator(...) - tut jana

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_Array = anotherArray.flat(Infinity)
console.log(real_another_Array);

console.log(Array.isArray('Hitesh')); 
console.log(Array.from('Hitesh'));
console.log(Array.from({name:"hitesh"})); // intresting empty array  

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));// converting array