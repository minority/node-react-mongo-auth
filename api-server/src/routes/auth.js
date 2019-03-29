import { Router } from "express";
import AuthController from "../controllers/AuthController";
import AuthValidator from "../middleware/validators/AuthValidator";

const router = Router();

router.post("/auth/signin", AuthValidator.signin, AuthController.signin);
router.post("/auth/signup", AuthValidator.signup, AuthController.signup);
router.post(
  "/auth/refresh-tokens",
  AuthValidator.refreshTokens,
  AuthController.refreshTokens
);
router.post("/auth/logout", AuthValidator.checkAuth, AuthController.logout);
router.get("/auth/restore", AuthController.restore);
router.post("/auth/confirmation", AuthController.confirmation);

export default router;
