function getAdmin(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Rodrigo', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');
usuarios.set('Barbará', 'User');

console.log(getAdmin(usuarios))