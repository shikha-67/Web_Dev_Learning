console.log(typeof(null));// object is type of null

console.log(23==23); //true
console.log(23==23.34); //false

let a=23;
let b="23";
console.log(a==b); //true only value comparison
console.log(a===b); //false beccause type value comparison

console.log(null==undefined); //true because only value checking
console.log(null===undefined); //false because value and type coercion both
console.log(null==0);  //false becuase null value is "null" or "undefined"
console.log(null===0) //null is object-like & 0 is Number type
console.log(Number(null)==0); //true because Number() will convert null in 0
console.log(null>=0); //tue
console.log(null>0); //false

