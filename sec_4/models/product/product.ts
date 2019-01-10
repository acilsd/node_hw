import fs from 'fs';
import path from 'path';
import { rootDir } from '../../util/path';

const readProdsFromFile = (cb?: any) => {
  fs.readFile(path.join(rootDir, 'data', 'products.json'), (err, data: any) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(data));
  });
};

class Product {
  public static fetchAll(cb: any) {
    readProdsFromFile(cb);
  }

  public title: any;

  private p = path.join(rootDir, 'data', 'products.json');

  constructor(title: any) {
    this.title = title;
  }

  public save() {
    readProdsFromFile((products: any) => {
      products.push(this);
      fs.writeFile(this.p, JSON.stringify(products), (error) => console.log(error));
    });
  }
}

export { Product };
