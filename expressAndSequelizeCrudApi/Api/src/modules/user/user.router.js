import { Router } from 'express';
import { userHomeController } from './controller/user.js';
const router = Router();

router.get('/', userHomeController);



export {
    router
}