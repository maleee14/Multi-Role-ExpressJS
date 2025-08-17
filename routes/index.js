import express from "express";
import userRoute from "./v1/user.js";
import checkRole from "../middlewares/checkRole.js";
import jwtAuth from "../middlewares/jwtAuth.js";

const router = express.Router();

router.get("/", jwtAuth(), checkRole("admin"), (req, res) => {
  res.send("Welcome to Express");
});

router.use("/v1", userRoute);

export default router;
