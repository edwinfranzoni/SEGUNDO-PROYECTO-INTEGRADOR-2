import pool from "../db/config.js";


export const getAllPostService = async () => {
    const result = await pool.query("SELECT * FROM posts");
return  result.rows;    
};

export const getPostByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
    return result.rows[0];
};

export const createPostService = async (title, content, author_id) => {
    const result = await pool.query("INSERT INTO posts (title, content, author_id, published) VALUES ($1, $2, $3, $4) RETURNING *", [title, content, author_id, false]);
    return result.rows[0];
}

export const updatePostService = async (id, title, content, author_id) => {
    const result = await pool.query("UPDATE posts SET title = $1, content = $2, author_id = $3 WHERE id = $4 RETURNING *", [title, content, author_id, id]);
    return result.rows[0];
};

export const deletePostService = async (id) => {
    const result = await pool.query("DELETE FROM posts WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};

export const getPostsByAuthorIdService = async (author_id) => {
    const result = await pool.query("SELECT * FROM posts WHERE author_id = $1", [author_id]);
    return result.rows;
};





