import { Router } from 'express';
import { authHomeController } from './controller/auth.js';
const router = Router();

router.get('/', authHomeController);



export {
    router
}