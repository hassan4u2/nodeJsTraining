import { sequelize as SeqObj } from '../dbConnection.js'
import { Sequelize, DataTypes } from 'sequelize'

// const productModel = SeqObj.define('Product', {
//     // Model attributes are defined here
//     id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         unique: true,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     pName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     pPrice: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     pDescription: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
