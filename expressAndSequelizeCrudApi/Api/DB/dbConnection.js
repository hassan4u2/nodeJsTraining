import { Sequelize } from 'sequelize';

// Create a connection to the database by creating a Sequelize instance from the Sequelize class
const sequelize = new Sequelize(
    'sequelize_db',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
)

// Connect to the database
const connectDB = async () => {
    // sequelize is an instance of Sequelize class || and sync() is a method of Sequelize class
    return await sequelize.sync({ alter: false }).then(
        (result) => {
            console.log('Database connected successfully');
            // console.log(result);
        }
    ).catch(
        (err) => {
            console.log('Error connecting to the database');
            // console.error(err);
        }
    )
}

// Export the connection
export {
    // will use in models
    sequelize,
    // will use in main router to connect to the database
    connectDB
}