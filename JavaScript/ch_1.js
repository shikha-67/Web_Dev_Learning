let a=8;
console.log(a); //prints 8

var b=89;
function variable(){
    var b=90;
    console.log(b); // prints 90
}
console.log(b); //prints 89 because function called after this not before this


variable();
{
    var b=20;
}
console.log(b); //prints 20

var b=60;
console.log(b);

//let a=10;
//console.log(a); //SyntaxError: Identifier 'a' has already been declared

a=25;
console.log(a); //let redefinition allowed but redeclaration not allowed

const d=10;
console.log(d);

//d=89;
//console.log(d); //TypeError: Assignment to constant variable.

//primitive data type or built in data type
//number,string,boolean,undefined,symbol,null

//non primitive data type
//array,function




//boolean
let t=true;
let f=false;
if(t){
    console.log(t);
}
else{
    console.log(f);
}



//const undo; //SyntaxError: Missing initializer in const declaration
//console.log(undo);//SyntaxError: Missing initializer in const declaration
//always a value required in const data type
let typ1=45+"89";
let typ2=45-"89";
let typ3=45*"89";
let typ4="89"/45;

console.log(typ1,"Its type is "+typeof(typ1));
console.log(typ2,"Its type is "+typeof(typ2));
console.log(typ3,"Its type is "+typeof(typ3));
console.log(typ4,"Its type is "+typeof(typ4));

console.log("Now using function call same output")
function call(a){
    console.log(a,"Its type is "+typeof(a));
}
call(typ1);
call(typ2);
call(typ3);
call(typ4);
console.log(typeof(null));//returns object


array=[2,"hi",3.5];
console.log(array[2]);

obj={
    name:"Shi",
    class:10
}
console.log(obj.name);
console.log(obj["class"]);
let todo=[];
console.log(todo);
let user=null;
console.log(user);
let name;
console.log(name);
let data={};


let nam = "Shikha";
let age = 22;
console.log(`Hi' ${nam}, you are ${age}`);
 
nam ="allen";
age=89;
console.log("hi" +nam);