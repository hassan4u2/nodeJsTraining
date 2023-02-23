// delete category by product owner
// http://localhost:4800/categories/delete/1 DELETE



import { Router } from 'express';
import { deleteCategory } from '../controllers/deleteCategory.controller.js';


const router = Router();
let baseRoute = '/categories/delete/:id';

router.put(baseRoute, deleteCategory);

export { router as deleteCategoryRouter };