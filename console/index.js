/**
 * console
 */

console.assert(assertion, message)
// permet d'afficher un message et la trace d'appel si l'expression passée retourne false.
// exemple:
let x = 5;
let y = 5;
const myObj = {firsname:"John", lastname:"Doe"};
console.assert(x + y === 11, myObj);


console.count(label)
// permet de compter le nombre de fois que la ligne a été exécutée.

console.error(message)
// permet d'afficher un message d'erreur en rouge dans la console du navigateur.

console.table(tableau)
// permet d'afficher les tableaux sous forme de tableau avec deux colonnes : une pour les index et un pour les valeurs associées.

// Ces méthodes permettent de démarrer un timer
console.time()
// puis de le terminer
console.timeEnd()
// et d'afficher le temps d'exécution entre les deux.

console.trace()
// permet d'afficher la trace d'appel. Nous y reviendrons, mais en deux mots c'est l'ordre d'appel et d'exécution des fonctions.

console.warn(message)
// permet d'afficher un message d'avertissement dans la console du navigateur.

console.info(message)
// permet d'afficher un message d'information dans la console du navigateur.
