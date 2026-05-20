import { getAllPostService } from "../services/postServices.js";
import { getPostByIdService } from "../services/postServices.js";
import { createPostService } from "../services/postServices.js";
import { updatePostService } from "../services/postServices.js";
import { deletePostService } from "../services/postServices.js";
import { getPostsByAuthorIdService } from "../services/postServices.js";

export const getallPost = async (req, res) => {
    const posts = await getAllPostService();
    res.status(200).json(posts);
};

export const getPostById = async (req, res) => {
    const { id } = req.params;
    const post = await getPostByIdService(id);
    if (post) {
        res.status(200).json(post);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
};

export const createPost = async (req, res) => {
    const { title, content, author_id, published } = req.body;      
    const newPost = await createPostService(title, content, author_id, published);  
    res.status(201).json(newPost);
};  

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content, author_id } = req.body;

    const updatedPost = await updatePostService(id, title, content, author_id);
    if (updatedPost) {
        res.status(200).json(updatedPost);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
};

export const deletePost = async (req, res) => {
    const { id } = req.params;

    const deletedPost = await deletePostService(id);
    if (deletedPost) {
        res.status(200).json(deletedPost);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
};

export const getPostsByAuthorId = async (req, res) => {
    const { author_id } = req.params;
    const posts = await getPostsByAuthorIdService(author_id);
    res.status(200).json(posts);
};  
