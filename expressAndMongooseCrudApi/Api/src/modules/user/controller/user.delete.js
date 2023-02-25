import { userModel } from "../../../../DB/model/User.model.js"

const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id
        const deletedUser = await userModel.findByIdAndDelete(id)
        if (!deletedUser) {
            return res.status(404).json({
                message: 'User not exist'
            })
        }
        return res.json({
            message: 'User deleted successfully',
            deletedUser: deletedUser
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Catched error while deleting user',
            error: error
        })
    }

}



export {
    deleteUser
}