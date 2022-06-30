/**
 * - Equivale a uma comparação de tipo e valor (===)
 * - Sempre precisa de um valor "default"
 * - Ideal pra quando se precisa comparar muitos valores
 */

function getAnimal(id){
    switch(id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe";
    }
}

console.log(getAnimal(1));
console.log(getAnimal(2));
console.log(getAnimal(3));
console.log(getAnimal(4));