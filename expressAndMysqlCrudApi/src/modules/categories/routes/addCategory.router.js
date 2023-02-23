// add category
// http://localhost:4800/categories/add POST
// data: {name, createdBy}

import { Router } from 'express';
import { addCategory } from '../controllers/addCategory.controller.js';


const router = Router();
let baseRoute = '/categories/add';

router.post(baseRoute, addCategory);

export { router as addCategoryRouter };

