// get all user products
// http://localhost:4800/products/:userId GET

import { Router } from 'express';
import { getUserProducts } from '../controllers/getProductsByUserId.controller.js';

const router = Router();
let baseRoute = '/products/searchbyid/:userId';
router.get(baseRoute, getUserProducts);

export { router as getUserProductsRouter };