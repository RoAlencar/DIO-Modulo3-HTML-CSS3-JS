const pessoa = {
    firstName: "Diego",
    lastName: "Vieira",
    getFullName: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    },
};

pessoa.getFullName();