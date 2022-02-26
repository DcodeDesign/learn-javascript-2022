/** Le hoisting
 En JavaScript vous entendrez probablement parler du
 hoisting ou remontée des déclarations ou hissage en français.

 Il s'agit d'une spécificité du langage qui fait que
 lorsque l'interpréteur parse (parcourt et analyse)
 votre code, il va automatiquement remonter toutes
 les déclarations en haut de votre code
 */

// Cela permet d'écrire cela et de ne pas avoir d'erreur :
a = 2;
let a;
console.log(a); // 2

console.log(b); // undefined car l’initialisation se fait lors de la remontée
var b = 1; // assignation
console.log(b); // 1

// Phase de déclaration lors de la remontée, si on tente d'accéder à la variable let
// on a une ReferenceError
let a; // initialisation à undefined lors de l’exécution.
// ici a vaut undefined
a = 2; // assignation de la valeur 2
// ici a vaut 2
