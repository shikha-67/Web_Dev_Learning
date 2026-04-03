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

