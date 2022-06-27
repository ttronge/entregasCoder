const fs = require('fs');

class Conteneor {
  constructor(file) {
    this.file = file;
  };

  static id = 1;

  save(obj) {
    obj.id = Conteneor.id;
    try {
      if (obj.id === 1) fs.writeFileSync(this.file, JSON.stringify([obj], null, 2));
      else {
        const file =   JSON.parse(fs.readFileSync(this.file));
        file.push(obj);
        fs.writeFileSync(this.file, JSON.stringify(file, null, 2));
      };
      Conteneor.id++
    }
    catch (err) {
      console.log(err);
    };
  };

  getById(id) {
    const file = JSON.parse(fs.readFileSync(this.file));
    const resultado = file.find((product) => product.id == id)
    console.log(resultado ? resultado : null);
  };

  getAll() {
    const file = JSON.parse(fs.readFileSync(this.file));
      console.log(file);
  };

  deleteById(id) {
    const file = JSON.parse(fs.readFileSync(this.file))
    const productsWithoutDelete = file.filter((item) => item.id !== id)
    console.log(`Has eliminado el ${id} `);
    fs.writeFileSync(this.file, JSON.stringify(productsWithoutDelete, null, 2));
  }
  
  deleteAllProducts (){
    fs.writeFileSync(this.file, JSON.stringify([], null, 2));
    
  };

};


const test1 = new Conteneor('./productos.txt');
const test2 = new Conteneor('./productos.txt');
const test3 = new Conteneor('./productos.txt');

test1.save({ title: 'producto1', price: 5, thumbnail: 'https://media.todojujuy.com/p/2eb76b994fbe3f471c06b21c836280e1/adjuntos/227/imagenes/000/352/0000352898/1200x1200/smart/el-sapo-pepe.jpg' });
test2.save({ title: 'test2', price: 5, thumbnail: 'https://los40es00.epimg.net/los40/imagenes/2020/02/04/cinetv/1580834241_572538_1580834379_noticia_normal.jpg' })
test3.save({ title: 'test3', price: 5, thumbnail: 'https://los40es00.epimg.net/los40/imagenes/2018/05/05/cinetv/1525519567_029601_1525519650_noticia_normal.jpg' })
test1.getById(32)
test1.getAll()
//test1.deleteById(3)
//test1.deleteAllProducts()