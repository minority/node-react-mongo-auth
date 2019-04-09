import { Router } from "express";
import UserController from "../controllers/UserController";
import Authorize from "../middleware/Authorize";

const router = Router();

router.get("/user", Authorize.check, UserController.index);
router.get("/user/clear", Authorize.check, UserController.clear);

export default router;
