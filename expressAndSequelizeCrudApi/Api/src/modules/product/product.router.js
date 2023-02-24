import { Router } from 'express';
import * as productController from './controller/product.js';
const router = Router();

router.get('/', productController.productHome);



export {
    router
}