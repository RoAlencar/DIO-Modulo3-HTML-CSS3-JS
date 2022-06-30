/**
 * Retrições do Arrow function:
 * 
 * 1 - "this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar
 * 2 - Não existe o obejeto "arguments"
 * 3 - O construtur (ex: nem MeuObjeto()) também não pode ser utilizado
 */

const helloWorld = () => {
    return "Hello world"
}

//Se for uma declaração curta (uma linha), não precisa haver o return
const helloWorld2 = () => "Olá Mundo";

console.log(helloWorld());
console.log(helloWorld2());

//-----------------------------------

/**
 * Caso exista apenas uma linha, pode dispensar as chaves e o return
 * 
 * Arrow function não faz Hoisting
 */

const soma1 = (a,b) => a+b;
console.log(soma1(4,6));

const soma2 = a => a;
console.log(soma2(4))

