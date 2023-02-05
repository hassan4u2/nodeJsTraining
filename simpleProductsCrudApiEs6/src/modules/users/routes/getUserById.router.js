// get user by id
// http://localhost:4800/users/:id POST
// data: {email, name, password}

import { Router } from 'express';
import { getUserById } from '../controllers/getUserById.controller.js';

const router = Router();
let baseRoute = '/users/:id';

router.get(baseRoute, getUserById);

export { router as getUserByIdRouter };