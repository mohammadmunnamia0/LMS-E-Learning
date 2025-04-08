import express from "express"
import { register } from "../controller/user.js";

const router = express.Router();

 router.post('/user/register',register)

export default router;