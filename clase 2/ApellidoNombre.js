class Usuario {
    constructor(nombre, apellido, mascotas, libros) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = mascotas;
        this.libros = libros;
    };

    getFullName() {
        return `el nombre del usaurio es ${this.nombre} ${this.apellido}`
    };

    addMascostas() {
        return this.mascotas.length
    };

    addBook(nameBook, author) {
        this.libros.push({ nombre: nameBook, autor: author })
        return this.libros
    };

    getBookNames(){
        return this.libros.map(item => item.nombre);
    }

};

let tomastronge = new Usuario('tomas', 'tronge', ['masla', 'olivia'], []);

console.log(tomastronge.getFullName());
console.log(tomastronge.addMascostas());
console.log(tomastronge.addBook('1982', 'Orwell'));
console.log(tomastronge.addBook('El señor de las moscas',  'William Golding'));
console.log(tomastronge.getBookNames());