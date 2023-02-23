// update product by product owner 
// http://localhost:4800/products/delete/1 DELETE
// data: {name, createdBy}

import { Router } from 'express';
import { deleteProduct } from '../controllers/deleteProduct.controller.js';


const router = Router();
let baseRoute = '/categories/delete/:id';

router.put(baseRoute, deleteProduct);

export { router as deleteProductRouter };