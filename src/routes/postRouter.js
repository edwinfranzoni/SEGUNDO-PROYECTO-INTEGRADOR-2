import { Router } from "express";
import { getallPost } from "../controllers/postController.js";
import { getPostById } from "../controllers/postController.js";
import { createPost } from "../controllers/postController.js";
import { updatePost } from "../controllers/postController.js";
import { deletePost } from "../controllers/postController.js";
import { getPostsByAuthorId } from "../controllers/postController.js";

const postRouter = Router();

postRouter.get("/", getallPost);
postRouter.get("/author/:author_id", getPostsByAuthorId);
postRouter.get("/:id", getPostById);
postRouter.post("/", createPost);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);

export default postRouter;  
