// add category
// http://localhost:4800/products/add POST
// data: {name, createdBy}

import { Router } from 'express';
import { addProduct } from '../controllers/addProduct.controller.js';


const router = Router();
let baseRoute = '/products/add';

router.post(baseRoute, addProduct);

export { router as addProductRouter };