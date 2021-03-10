-- Drops the database if it currently exists --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the database --
CREATE DATABASE burgers_db;

-- Makes it so all of the following code will affect burgers_db --
USE burgers_db;

-- Creates table for burgers --
CREATE TABLE burgers (
    -- Makes a numeric column called "id" which cannot contain null --
    id INTEGER NOT NULL AUTO_INCREMENT,
    -- Makes a string column called "burger_name" which cannot contain null --
    burger_name VARCHAR(30) NOT NULL,
    -- Makes a boolean column named "devoured" --
    devoured BOOLEAN DEFAULT false,
    -- Sets id as primary key --
    PRIMARY KEY (id)
);