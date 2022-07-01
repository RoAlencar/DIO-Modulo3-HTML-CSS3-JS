/**
 * O que é o Filter
 * - Cria um novo array
 * - Não modifica o array original
 * 
 * Sintaxe de parâmetros
 * 
 * array.filter(callback, thisArg)
 * - Callback: Função a ser executada em cada elemento
 * - thhisArgs(opcional): valor de "this" dentro da função de callback
 */

const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];

console.log(frutas.filter((frutas) => frutas.includes('maçã')));