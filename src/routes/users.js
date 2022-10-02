import express from "express";
import { deleteUser, getAllUsers, getUser, udpateUser } from '../controllers/userscontroller.js';
import { verifyUser } from '../utils/verifytoken.js';

const router = express.Router();

router.put("/:id", verifyUser, udpateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", getUser);
router.get("/", getAllUsers);

export default router;