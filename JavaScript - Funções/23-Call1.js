const pessoa = {
    nome: "Miguel",
};

const animal = {
    nome: "Murphy",
};

function getSomething(){
    console.log(this.nome);
}

getSomething.call(pessoa);
getSomething.call(animal);