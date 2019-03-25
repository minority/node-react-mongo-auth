import { Router } from "express";
import MainController from "../controllers/MainController";
import checkAuth from "../middleware/checkAuth";

const router = Router();

router.get("/main", checkAuth, MainController.main);

export default router;
