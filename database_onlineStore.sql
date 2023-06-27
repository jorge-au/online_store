CREATE DATABASE online_store;
USE online_store;
CREATE TABLE users (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL, 
    email VARCHAR(255)  UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

 