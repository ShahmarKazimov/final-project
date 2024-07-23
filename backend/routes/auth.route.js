import express from "express";

const router = express.Router();

import { signup, signin, logout } from "../controllers/auth.controller.js";

router.post('/signin', signin)
router.post('/signup', signup)
router.post('/logout', logout)

export default router;