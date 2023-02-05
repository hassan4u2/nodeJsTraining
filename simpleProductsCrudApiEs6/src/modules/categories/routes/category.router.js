// get all categories
// http://localhost:4800/categories GET

import { Router } from 'express';
import { getAllCategories } from '../controllers/category.controller.js';

const router = Router();
let baseRoute = '/categories';
router.get(baseRoute, getAllCategories);

export { router as categoriesRouter };