import pool from "../db/config.js";


export const getAllUsersService = async () => {
    const result = await pool.query("SELECT * FROM authors");
return  result.rows;    
};

export const getUserByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM authors WHERE id = $1", [id]);
    return result.rows[0];
};

export const createUserService = async (name, email, bio) => {
    const result = await pool.query("INSERT INTO authors (name, email, bio, published) VALUES ($1, $2, $3, $4) RETURNING *", [name, email, bio, false]);
    return result.rows[0];
};

export const updateUserService = async (id, name, email, bio) => {
    const result = await pool.query("UPDATE authors SET name = $1, email = $2, bio = $3 WHERE id = $4 RETURNING *", [name, email, bio, id]);
    return result.rows[0];
};

export const deleteUserService = async (id) => {
    const result = await pool.query("DELETE FROM authors WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};  
