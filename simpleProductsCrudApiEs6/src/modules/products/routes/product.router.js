// get all products
// http://localhost:4800/products GET


import { Router } from 'express';
import { getAllProducts } from '../controllers/product.controller.js';

const router = Router();
let baseRoute = '/products';
router.get(baseRoute, getAllProducts);

export { router as productsRouter };