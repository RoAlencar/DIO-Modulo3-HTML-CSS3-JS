const pessoa = {
    nome: "Miguel",
}

const animal = {
    nome: "Godi",
}

function getSomething(){
    console.log(this.nome);
}

getSomething.apply(pessoa);
getSomething.apply(animal);