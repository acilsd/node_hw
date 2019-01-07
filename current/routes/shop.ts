import express from 'express';
import { rootDir } from '../util/path';
import { products } from './admin';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

export { router as shopRoutes };
