/**Spread: uma forma de lidar separadamento com elementos 
 * O que era parte de um array, se torna um elemento independente
*/

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));