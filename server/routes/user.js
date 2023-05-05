import express from "express";
import { newUser, getUsers } from "../controllers/user.js";

const router = express.Router();
router.get("/", getUsers);

router.post("/", newUser);

export default router;
