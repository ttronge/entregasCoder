const fs = require('fs');

class Conteneor {
  constructor(file) {
    this.file = file;
  };

  static id = 1;

   save(obj) {
    obj.id = Conteneor.id;
    try {
      if (obj.id === 1) fs.writeFileSync(this.file, JSON.stringify([obj], null, 2))
      else {
        const file = JSON.parse(fs.readFileSync(this.file));
        file.push(obj);
        fs.writeFileSync(this.file, JSON.stringify(file, null, 2));
      };

      Conteneor.id++
      
    }
    catch (err) {
      console.log(err);
    };
  };
};


const test1 = new Conteneor('./productos.txt');
const test2 = new Conteneor('./productos.txt');
const test3 = new Conteneor('./productos.txt');

test1.save({ title: 'producto1', price: 5, description: 'tet' });
test2.save({ title: 'test2', price: 5, description: 'tet' })
test3.save({ title: 'test3', price: 5, description: 'tet' })
