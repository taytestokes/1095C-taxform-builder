-- Creates users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(500),
    password VARCHAR(500),
    first_name VARCHAR(500),
    last_name VARCHAR(500)
);