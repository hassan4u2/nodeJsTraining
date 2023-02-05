// get all users
// http://localhost:4800/users GET

import { Router } from 'express';
import { getAllUsers } from '../controllers/user.controller.js';

const router = Router();
let baseRoute = '/users';
router.get(baseRoute, getAllUsers);

export { router as usersRouter };