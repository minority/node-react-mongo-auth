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
router.post(
  "/auth/restore-password",
  AuthValidator.restorePassword,
  AuthController.restorePassword
);
router.post(
  "/auth/confirm-restore-password",
  AuthValidator.confirmRestorePassword,
  AuthController.confirmRestorePassword
);

export default router;
