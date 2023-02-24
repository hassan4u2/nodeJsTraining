import { Router } from 'express';
import * as userController from './controller/user.js';
const router = Router();

router.get('/', userController.userHome);
router.patch('/update/:id', userController.updateUserById);
router.delete('/delete/:id', userController.deleteUserById);

export {
    router
}