import { Router } from 'express';
import { productHomeController } from './controller/product.js';
const router = Router();

router.get('/', productHomeController);



export {
    router
}