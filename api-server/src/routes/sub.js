import { Router } from "express";

const router = Router();

router.get("/sub", (req, res) => {
  res.send("sub");
});

export default router;
