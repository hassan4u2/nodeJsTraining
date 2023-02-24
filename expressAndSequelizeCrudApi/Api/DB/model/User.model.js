import { sequelize as SeqObj } from '../dbConnection.js' // from the local file dbConnection.js
import { Sequelize, DataTypes } from 'sequelize' // from the sequelize package
import { productModel } from './Product.model.js' // from the local file Product.model.js

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
}
)


// relation between user and product
userModel.hasMany(productModel,
    {
        foreignKey: 'createdBy',
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
productModel.belongsTo(userModel,
    {
        foreignKey: 'createdBy',
    }
)

export {
    // will use in the user controller
    userModel
}