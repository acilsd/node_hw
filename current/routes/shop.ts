import express from 'express';
import { getProducts, products } from '../controllers/products';

const router = express.Router();

router.get('/', getProducts);

export { router as shopRoutes };
