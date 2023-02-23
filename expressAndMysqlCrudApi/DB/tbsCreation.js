function createTables(connection) {
    // Create tables using affectedRows
    // create users table
    connection.query(`CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
)`, (error, results) => {
        if (error) {
            console.error(error);
        } else {
            console.log("users table created successfully");
        }
    });

    // create categories table
    connection.query(`CREATE TABLE IF NOT EXISTS categories(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    createdBy INT NOT NULL,
    FOREIGN KEY (createdBy) REFERENCES users(id) ON DELETE CASCADE
)`, (error, results) => {
        if (error) {
            console.error(error);
        } else {
            console.log("categories table created successfully");
        }
    });

    // create products table
    connection.query(`CREATE TABLE IF NOT EXISTS products(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    category_id INT NOT NULL,
    createdBy INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    FOREIGN KEY (createdBy) REFERENCES users(id) ON DELETE CASCADE
)`, (error, results) => {
        if (error) {
            console.error(error);
        } else {
            console.log("products table created successfully");
        }
    });
};

export { createTables };