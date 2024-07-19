DROP DATABASE IF EXISTS games_dev;


CREATE DATABASE games_dev;

\c games_dev;


CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name TEXT,
    company TEXT, 
    price INTEGER,
    rating VARCHAR(100),
    sequel BOOLEAN,
    genre VARCHAR(100),
    description TEXT

);

