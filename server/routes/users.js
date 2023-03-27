import express from "express";
import {getUser, getUserFriends, addRemoveFriend } from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//Read get user detials
router.get("/:id", verifyToken, getUser);

//Read get user's frindslist detials
router.get("/:id/friends", verifyToken, getUserFriends);

//update add or remove friends of a user
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);


export default router