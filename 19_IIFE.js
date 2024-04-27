//Immediately Invoked Function Expressions (IIFE)
(function chai(){
  //named IIFE
  console.log(`DB Connected.`);
})();

//Iska Istemal Global Variable pollution ko Hatane keliye Karte hai.

((name)=>{
  //Unname IIFE
  console.log(`DB Connected ${name}`);
})('Nitesh')
