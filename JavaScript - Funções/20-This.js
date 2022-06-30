/** A palavra reservada this é uma referencia de contexto
 * no exemplo, this refere-se ao objeto pessoa
 */

const pessoa = {
    firstName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getId: function(){
        return this.id;
    }
};

console.log(pessoa.fullName());
console.log(pessoa.getId())