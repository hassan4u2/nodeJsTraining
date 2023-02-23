// update product by product owner 
// http://localhost:4800/products/update/1 PUT
// data: {name, createdBy}

import { Router } from 'express';
import { updateProduct } from '../controllers/updateProduct.controller.js';


const router = Router();
let baseRoute = '/products/update/:id';

router.put(baseRoute, updateProduct);

export { router as updateProductRouter };