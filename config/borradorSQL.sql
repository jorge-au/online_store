-- tabla para envio de mensaje
CREATE TABLE mensaje(
    id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    mensaje TEXT
);

-- tabla de registro
CREATE TABLE registro(
    id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(200) NOT NULL,
    apellido VARCHAR(200) NOT NOT,
    email VARCHAR(200) NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
);

-- tabla de productos
CREATE TABLE productos(
    id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(200) NOT NULL,
    categoria VARCHAR(200) NOT NULL,
    imagen VARCHAR(200) NOT NULL,
    descripcion TEXT NOT NULL,
    precio DECIMAL NOT NULL
);
