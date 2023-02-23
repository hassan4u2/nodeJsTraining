// sEARCH PRODUCTS BY NAME
//  http://localhost:4800/products/search/iphone GET

import { Router } from 'express';
import { getProductsByName } from '../controllers/getProductsByName.controller.js';

const router = Router();
let baseRoute = '/products/searchbyname/:name';
router.get(baseRoute, getProductsByName);

export { router as getProductsByNameRouter };