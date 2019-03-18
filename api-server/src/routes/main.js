import { Router } from "express";
import MainController from "../controllers/MainController";

const router = Router();

router.get("/main", MainController.main);

export default router;
