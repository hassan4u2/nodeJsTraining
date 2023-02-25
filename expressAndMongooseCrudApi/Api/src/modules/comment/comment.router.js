import { Router } from 'express';
import * as commentController from './controller/comment.js';

const router = Router();

router.get("/", commentController.homePage);
router.post("/add", commentController.addComment);
router.get("/all", commentController.getAllCommentsWithUser);
router.put("/update/:id", commentController.updateCommentByOwner);
router.delete("/delete/:id", commentController.deleteCommentByOwner);
router.get("/:id", commentController.getCommentById);


export {
    router
}