import { Router } from 'express';
import * as productController from './controller/product.js';
const router = Router();

router.get('/', productController.productHome);
router.post('/add', productController.addProduct);
router.patch('/update/:id', productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);
router.get('/all', productController.getAllProducts);
router.get('/search_gt_3000', productController.searchProductsGt3000);

export {
    router
}