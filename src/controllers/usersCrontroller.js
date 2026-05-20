
import { getAllUsersService } from "../services/usersServices.js";
import { getUserByIdService } from "../services/usersServices.js";
import { createUserService } from "../services/usersServices.js";
import { updateUserService } from "../services/usersServices.js";
import { deleteUserService } from "../services/usersServices.js";



export const getallUsers = async (req, res) => {
    const users = await getAllUsersService();
    res.status(200).json(users);
};

export const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await getUserByIdService(id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

export const createUser = async (req, res) => {
    const { name, email, bio } = req.body;

    const newUser = await createUserService(name, email, bio);
    res.status(201).json(newUser);
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, bio } = req.body;

    const updatedUser = await updateUserService(id, name, email, bio);
    if (updatedUser) {
        res.status(200).json(updatedUser);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    const deletedUser = await deleteUserService(id);
    if (deletedUser) {
        res.status(200).json(deletedUser);
    } else {
        res.status(404).json({ message: "User not found" });
    }
}; 