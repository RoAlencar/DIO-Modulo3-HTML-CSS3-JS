/** Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro */

const retornaNomes = function () {
    return this.nome;
}

let bruno = retornaNomes.bind({nome: 'Bruno'});

console.log(bruno());