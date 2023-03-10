import { Op } from 'sequelize'
import { userModel } from '../../../../DB/model/User.model.js'

const userHome = async (req, res, next) => {
    return res.json({ message: 'UserModule' })
}
// get all users from user table
const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await userModel.findAll({})
        return res.json({
            message: 'Users',
            users: allUsers
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Server Error',
            error: error.stack
        })
    }
}

// update user
/*
// data to update
// enter only data need to update

{
    "name": "newname",
    "email": "newemail@gmail.updated",
    "password": "newpassword"
}
*/
const updateUserById = async (req, res, next) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
        const userUpdatedCheck = await userModel.update({
            name: name,
            email: email,
            password: password
        }, {
            where: {
                id: id
            }
        })
        if (userUpdatedCheck[0] === 0) {
            return res.status(404).json({
                message: 'User not found'
            })
        } else if (userUpdatedCheck[0] === 1) {
            // console.log(userUpdatedCheck) <== [1] (affectedRows) || [0] (no affectedRows)
            return res.json({
                message: 'User Updated',
                affectedRows: userUpdatedCheck
            })
        }
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            return res.status(400).json({
                message: "Email already in use"
            });
        } else {
            return res.status(500).json({
                message: "UPDATE Error",
                error: error.stack
            });
        }
    }

}


const deleteUserById = async (req, res, next) => {
    // delete user by id
    const { id } = req.params;
    console.log(id)
    try {
        const userDeletedCheck = await userModel.destroy({
            where: {
                id: id
            }
        })
        if (userDeletedCheck === 0) {
            return res.status(404).json({
                message: 'User not found'
            })
        } else if (userDeletedCheck === 1) {
            // console.log(userDeletedCheck) <== 1 (affectedRows) || 0 (no affectedRows)
            return res.json({
                message: 'User Deleted',
                affectedRows: userDeletedCheck
            })
        }
    }
    catch (error) {
        return res.status(500).json({
            message: 'Server Error',
            error: error.stack
        })
    }

}


// operators

const getUsersStartByConditionA = async (req, res, next) => {
    try {
        const users = await userModel.findAll({
            where: {
                age: {
                    [Op.lt]: 30
                },
                name: {
                    [Op.startsWith]: 'A'
                }
            }
        })
        return res.json({
            message: 'Users with age less than 30 and name starts with A',
            users: users
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Server Error',
            error: error.stack
        })
    }
}


const getUsersByListOfIds = async (req, res, next) => {
    try {
        const { ids } = req.query;
        if (!ids) {
            return res.status(400).json({
                message: 'Missing ids parameter'
            });
        }
        const idList = ids.split(',').map(id => parseInt(id));
        if (idList.some(isNaN)) {
            return res.status(400).json({
                message: 'Invalid ids parameter'
            });
        }
        const users = await userModel.findAll({
            where: {
                id: {
                    [Op.in]: idList
                }
            }
        });
        return res.json({
            message: 'Users',
            users: users
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Server Error',
            error: error.stack
        });
    }
};


const getUserProducts = async (req, res, next) => {
    // get user products
    console.log('get user products NOT COMPLETED')
}

export {
    userHome,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUsersStartByConditionA,
    getUsersByListOfIds,
    getUserProducts
}