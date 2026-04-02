let a=8;
console.log(a);

var b=89;
function variable(){
    var b=90;
    console.log(b); // prints 90
}
console.log(b); //prints 89 because funton called after this not before this
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


//number
let num=20;
let num1=30;
console.log(num1,num);

//reassignment to num 
num=38;
console.log(num);


//string
let str="Strike";
let str1="coming";
console.log(str,str1);

let str2="Strike\n";
let str3="coming";
console.log(str2,str3);


//boolean
let t=true;
let f=false;
if(t){
    console.log(t);
}
else{
    console.log(f);
}

//undefined

var un;
let und;
console.log(un);
console.log(und);

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


const int=234598585745874n;
console.log(int);

const int1=BigInt(23354556672234);
console.log(int1);
console.log(typeof(1n));
console.log(typeof(BigInt("1")));
console.log(Number.isSafeInteger(4559285829557892222424222n));
console.log(Number.isSafeInteger(9007199254740991n));
console.log(Number.isSafeInteger(1n));
console.log(2n**5n);
console.log(BigInt(2)**BigInt(54));
let big1=2n**54n; //2^54
let big2=BigInt(2)**BigInt(54);
console.log(big1===big2);
console.log(null==undefined);
console.log(null==0);
console.log(Number(null)==0);
console.log(null>=0);
console.log(null>0);
console.log(1n==2);
console.log(Number(1n)==Number(2));
console.log(1n==1);
console.log(Number(1n)==Number(1));


const no=23;
console.log(no);

console.log(no);//TypeError: Assignment to constant variable.

console.log(null==undefined);

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