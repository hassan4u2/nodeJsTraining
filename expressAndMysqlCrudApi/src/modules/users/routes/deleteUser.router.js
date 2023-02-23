// delete user
//  http://localhost:4800/users/delete/1 DELETE


import { Router } from 'express';
import { deleteUser } from '../controllers/deleteUser.controller.js'

const router = Router();
let baseRoute = '/users/delete/:id';
router.delete(baseRoute, deleteUser);

export { router as deleteUserRouter };