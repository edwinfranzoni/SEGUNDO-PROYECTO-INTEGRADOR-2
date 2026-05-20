import { Router } from "express";
import { getallUsers } from "../controllers/usersCrontroller.js";
import { getUserById } from "../controllers/usersCrontroller.js";
import { createUser } from "../controllers/usersCrontroller.js";
import { updateUser } from "../controllers/usersCrontroller.js";
import { deleteUser } from "../controllers/usersCrontroller.js";

const usersRouter = Router();

usersRouter.get("/",getallUsers);
usersRouter.get("/:id", getUserById);
usersRouter.post("/", createUser);
usersRouter.put("/:id", updateUser);
usersRouter.delete("/:id", deleteUser);


export default usersRouter;