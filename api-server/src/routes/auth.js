import { Router } from "express";
import { Validator } from "express-json-validator-middleware";
import AuthController from "../controllers/AuthController";

const router = Router();

const validator = new Validator({ allErrors: true });
const { validate } = validator;

const signinSchema = {
  type: "object",
  required: ["email", "password"],
  properties: {
    email: {
      type: "string"
    },
    password: {
      type: "string"
    }
  }
};

router.post(
  "/auth/signin",
  validate({ body: signinSchema }),
  AuthController.signin
);
router.post("/auth/signup", AuthController.signup);
router.post("/auth/refresh-tokens", AuthController.refreshTokens);
router.post("/auth/restore", AuthController.restore);

export default router;
