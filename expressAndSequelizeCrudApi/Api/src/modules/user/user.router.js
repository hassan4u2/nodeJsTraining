import { Router } from 'express';
import * as userController from './controller/user.js';
const router = Router();

router.get('/', userController.userHome);
router.get('/all', userController.getAllUsers);
router.patch('/update/:id', userController.updateUserById);
router.delete('/delete/:id', userController.deleteUserById);
router.get('/users_lt_30', userController.getUsersStartByConditionA);
router.post('/users_by_ids', userController.getUsersByListOfIds);
router.get('/user_products', userController.getUserProducts);

export {
    router
}