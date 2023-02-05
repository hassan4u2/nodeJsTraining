// add user
// http://localhost:4800/users/add POST
// data: {email, name, password}

import { Router } from 'express';
import { addUser } from '../controllers/addUser.controller.js';

const router = Router();
let baseRoute = '/users/add';

router.post(baseRoute, addUser);

export { router as addUserRouter };
