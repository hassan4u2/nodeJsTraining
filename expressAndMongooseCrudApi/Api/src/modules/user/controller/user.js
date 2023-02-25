import { userModel } from "../../../../DB/model/User.model.js"

const homePage = (req, res, next) => {
    return res.json({ message: 'userPage' })
}

const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await userModel.find()
        return res.json(allUsers)
    } catch (error) {
        return res.json({
            message: 'Catched error while getting all users',
            error: error
        })
    }
}

// getters methods


export {
    homePage,
    getAllUsers
}
