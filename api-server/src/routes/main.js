import { Router } from "express";
import mainController from "../controllers/MainController";

const router = Router();

router.get("/main", mainController.main);

export default router;
