export const products: any[] = [];

export const getAddProduct =  (req: any, res: any, next: any) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

export const postAddProduct  = (req: any, res: any, next: any) => {
  products.push({ title: req.body.title });
  res.redirect('/');
};

export const getProducts = (req: any, res: any, next: any) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
