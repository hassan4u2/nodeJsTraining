import { sequelize as SeqObj } from '../dbConnection.js'
import { Sequelize, DataTypes } from 'sequelize'
import { userModel } from './User.model.js'

const productModel = SeqObj.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    pName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pDescription: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export {
    productModel
}
