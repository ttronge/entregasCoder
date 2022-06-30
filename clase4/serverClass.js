const fetch = require('node-fetch')
class Conteneor {
  constructor(urlServer) {
    this.urlServer = urlServer;
  };

  async getById(id)  {
    const promesa = await fetch(this.urlServer)
    const parseo  = await promesa.json()
    const resultado = parseo.find((product) => product.id == id)
    console.log('get by id',resultado ? resultado : null);
  };

  async getAll() {
    const promesa = await fetch(this.urlServer)
    const parseo  = await promesa.json()
    console.log(parseo); 
  };

};


const test1 = new Conteneor('http://localhost:8080/productos');
const test2 = new Conteneor('http://localhost:8080/productos');
const test3 = new Conteneor('http://localhost:8080/productos');

test1.getAll()
test1.getAll()