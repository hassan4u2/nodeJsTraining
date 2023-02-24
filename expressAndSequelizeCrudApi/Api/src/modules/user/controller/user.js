import { userModel } from '../../../../DB/model/User.model.js'

const userHome = async (req, res) => {
    try {
        const allUsers = await userModel.findAll({})
        res.json({
            message: 'UserHomePage',
            users: allUsers
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error: error.stack
        })
    }
}


export {
    userHome
}