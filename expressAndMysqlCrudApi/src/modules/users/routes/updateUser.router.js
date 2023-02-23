// update user
// http://localhost:4800/users/update/1 PUT
// data: {email, name, password}

import { Router } from 'express';
import { updateUser } from '../controllers/updateUser.controller.js';

const router = Router();
let baseRoute = '/users/update/:id';
router.put(baseRoute, updateUser);

export { router as updateUserRouter }; 