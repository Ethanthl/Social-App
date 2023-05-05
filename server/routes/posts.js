import express from "express";
import { getPosts, createPosts } from "../controllers/post.js";
import auth from '../middleware/auth.js'
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPosts);
// router.post('/:id/likePost', auth, likePost);
export default router;
