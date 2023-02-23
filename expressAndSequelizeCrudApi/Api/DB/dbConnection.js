import { Sequelize } from 'sequelize';

// Create a connection to the database by creating a Sequelize instance from the Sequelize class
const sequelize = new Sequelize(
    'sequelize_db',
    'root',
    '',
    {
        host: 'localhost:3306',
        dialect: 'mysql',
    }
)

// Connect to the database
const connectDB = async () => {
    // sequelize is an instance of Sequelize class and sync() is a method of Sequelize class
    return await sequelize.sync().then(
        (result) => {
            console.log('Database connected successfully');
        }
    ).catch(
        (err) => {
            console.log('Error connecting to the database');
            console.error(err);
        }
    )
}

// Export the connection
export {
    connectDB,
}