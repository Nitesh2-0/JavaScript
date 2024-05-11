const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);


const chai = {
  name:'ginger chai',
  price:205,
  isAvilable : true,


  orderChai : function (){
    console.log(`chai`);
  }
}

Object.defineProperty(chai,'name',{
  writable:false,
  enumerable:false,
})

// console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for (let [key,value] of Object.entries(chai)) {
  if(typeof value !== 'function')
  console.log(`${key}, ${value}`);
}