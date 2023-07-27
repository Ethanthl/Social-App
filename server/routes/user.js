import express from "express";
import { newUser, getUsers, signIn } from "../controllers/user.js";
import auth from '../middleware/auth.js'
const router = express.Router();
router.get("/", getUsers);
router.post("/signup", newUser);
router.post("/signin", signIn);

export default router;
