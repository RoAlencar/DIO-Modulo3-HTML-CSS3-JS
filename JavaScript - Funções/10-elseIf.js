/** Javascript NÃO TEM elseif, as palavras SEMPRE estão espaçadas */

function numeroPositivo(num){
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if(ehNegativo) {
        return "Esse número é negativo!";
    } else if (!ehNegativo && maiorQueDez) {
        return "Esse número é positivo e maior que 10!";
    }
    return "Esse número é positivo!";
}

console.log(numeroPositivo(-1));
console.log(numeroPositivo(5));
console.log(numeroPositivo(13));