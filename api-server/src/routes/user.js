import { Router } from "express";
import UserController from "../controllers/UserController";
import AuthValidator from "../middleware/validators/AuthValidator";

const router = Router();

router.get("/user", AuthValidator.checkAuth, UserController.index);
router.get("/user/clear", AuthValidator.checkAuth, UserController.clear);

export default router;
