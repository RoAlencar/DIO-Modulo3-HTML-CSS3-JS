/**
 * Map vs Objeto
 * 
 * - Maps podem ter chaves de qualquer tipo
 * - Maps possuem a propriedade length
 * - Maps são mais fáceis de iterar
 *  - Utilizado quando o valor das chaves é desconhecido
 *  - Os valores tem o mesmo tipo
 */

const myMap = new Map()

console.log(myMap.set('apple', 'fruit'));

console.log(myMap.get("apple"));

console.log(myMap.delete("apple"));

console.log(myMap.get("apple"));