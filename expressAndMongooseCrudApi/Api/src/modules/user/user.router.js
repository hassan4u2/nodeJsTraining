import { Router } from 'express';
import * as userController from './controller/user.js';
import { deleteUser } from './controller/user.delete.js';
import { updateUser } from './controller/user.update.js';


const router = Router();

router.get('/', userController.homePage);
router.get('/all', userController.getAllUsers);

// delete & update routes
router.delete('/delete/:id', deleteUser);
router.put('/update/:id', updateUser);
// get users with name start with x with age less than y
// get users with name end with x
// get users with name contains x
// get users with name fully match the name variable which destructed from body
// get users with age between 20 and 50
// get user by id
// getters


export {
    router
}