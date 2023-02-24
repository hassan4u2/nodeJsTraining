import { sequelize as SeqObj } from '../dbConnection.js' // from the local file dbConnection.js
import { Sequelize, DataTypes } from 'sequelize' // from the sequelize package

// Create a model for the table
const userModel = SeqObj.define('User', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    confirmEmail: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
},
    // Model options
    {
        // If don't want createdAt and updatedAt
        // timestamps: false

    }
)


export {
    // will use in the user controller
    userModel
}