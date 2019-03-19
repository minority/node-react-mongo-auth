import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.get("/user", UserController.index);
router.get("/user/create", UserController.create);
router.get("/user/clear", UserController.clear);

export default router;
