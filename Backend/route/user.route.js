//for define route we need express
import express from "express";
import { login, signup} from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup", signup);//i.e our api request
router.post("/login",login);


export default router;