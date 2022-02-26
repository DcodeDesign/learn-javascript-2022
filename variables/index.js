/**
 * var
 */

console.log(myVar) // undefined
// console.log(otherVar) //Uncaught SyntaxError: otherVar is not defined

// declaration
var myVar; // undefined

// initialisation
myVar = 'text';

// problematic
var name = 'Jean';
var name = 'Eric';

// ne reconnaît pas la portée de bloc
{
    var name = 'Jhon';
}
console.log(name) // Jhon


/**
 * let
 */

let firstName = 'Jhon';
// let firstName = 'Jhon'; // Uncaught SyntaxError: Identifier 'firstName' has already been declared

{
    let lastName = 'Jhon';
}
// console.log(lastName) // Uncaught ReferenceError: lastName is not defined

/**
 * const
 */

const myConst = 'text'; // la déclaration doit s'accompagnée de son initialisation
// myConst = 'text'; // Uncaught TypeError: Assignment to constant variable.

const user = {
    name: 'Jhon'
}
user.name = 'Jean'; // ok

/* const user = user = {
    name: 'Jhon'
} */
