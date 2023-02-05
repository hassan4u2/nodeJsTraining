// update category  by product owner 
// http://localhost:4800/categories/update/1 PUT
// data: {name, createdBy}

import { Router } from 'express';
import { updateCategory } from '../controllers/updateCategory.controller.js';


const router = Router();
let baseRoute = '/categories/update/:id';

router.put(baseRoute, updateCategory);

export { router as updateCategoryRouter };