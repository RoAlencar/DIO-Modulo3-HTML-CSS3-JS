/** Métodos para adicionar, consultar e deletar 
 * 
 * Set vs Array
 * - Possui valores únicos
 * - Em vez de propriedade length, consulta-se o número de registros pela propriedade size
 * - Não possui os métodos map, filter, reduce etc.
*/

const mySet = new Set();

mySet.add(1);
mySet.add(5);

console.log(mySet.has(1));
console.log(mySet.has(3));

mySet.delete(5)