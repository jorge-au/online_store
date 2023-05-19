CREATE DATABASE tienda_online;
USE tienda_online;
CREATE TABLE usuarios (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL, 
    apellido VARCHAR (255) NOT NULL,
    email VARCHAR(255)  UNIQUE NOT NULL,
    contraseña VARCHAR(255) 
);

 