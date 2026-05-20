import { Router } from "express";
import usersRouter from "./usersRouter.js";
import postRouter from "./postRouter.js";


const router = Router();

router.use("/users", usersRouter);
router.use("/posts", postRouter);


export default router;


