import { Router } from 'express';
import * as userController from './controller/user.js';
import { deleteUser } from './controller/user.delete.js';
import { updateUser } from './controller/user.update.js';


const router = Router();

router.get('/', userController.homePage);
router.get('/all', userController.getAllUsers);
router.delete('/delete/:id', deleteUser);
router.put('/update/:id', updateUser);
router.get('/get/:id', userController.getUserById);
router.get('/get/search_st_x_lt_y/:stw/:age', userController.getUsersWithNameStartsWithXAndAgeLessThanY);
router.get('/get/search_end_x/:endw', userController.getUsersWithNameEndsWithX);
router.get('/get/search_contains_x/:cont', userController.getUsersWithNameContainsX);
router.get('/get/search_full_match/:match', userController.getMatchedUsers);
router.get('/get/search_age_between_20_50/:min/:max', userController.getUsersWithAgeBetween20And50);

export {
    router
}