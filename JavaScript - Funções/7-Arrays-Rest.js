/**Rest: Combina os argumentos em um array
 * O que era um argumento independente se torna parte de um array
 */

function confereTamanho(...args) {
    console.log(args.length);
}

confereTamanho()
confereTamanho(1, 2);
confereTamanho(3, 4, 5);