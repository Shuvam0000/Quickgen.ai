import express from "express";
import { getUserCreations,getPublishedCreations ,toggleLikeCreations } from "../controllers/userController.js";
import { auth } from "../middlewares/auth.js";

const useRouter = express.Router();

useRouter.get('/get-user-creations', auth, getUserCreations)
useRouter.get('/get-published-creations', auth, getPublishedCreations)
useRouter.post('/toggle-like-creation', auth, toggleLikeCreations)

export default useRouter;