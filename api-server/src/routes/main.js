import { Router } from "express";
import MainController from "../controllers/MainController";
import AuthValidator from "../middleware/validators/AuthValidator";

const router = Router();

router.get("/main", AuthValidator.checkAuth, MainController.main);

export default router;
