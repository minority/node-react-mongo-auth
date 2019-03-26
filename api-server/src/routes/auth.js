import { Router } from "express";
import AuthController from "../controllers/AuthController";
import AuthValidator from "../middleware/validators/AuthValidator";

const router = Router();

router.post("/auth/signin", AuthValidator.signin, AuthController.signin);
router.post("/auth/signup", AuthValidator.signup, AuthController.signup);
router.post("/auth/refresh-tokens", AuthController.refreshTokens);
router.post("/auth/restore", AuthController.restore);

export default router;
