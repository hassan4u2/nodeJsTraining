import { userModel } from "../../../../DB/model/User.model.js"

const updateUser = async (req, res, next) => {
    const { id } = req.params
    const { cliName, cliEmail, cliPassword, cliAge } = req.body
    // f_param = { _id: id }
    // s_param = update data object { cliName, cliEmail, cliPassword, cliAge}
    // findOneAndUpdate() if i want to get the updated document copy
    const user = await userModel.updateOne(
        {
            _id: id
        },
        {
            cliName,
            cliEmail,
            cliPassword,
            cliAge
        }
    )
    if (!user) {
        return res.status(404).json({
            message: 'User not exist'
        })
    }
    if (user.modifiedCount == 1) {
        return res.json({
            message: 'User updated successfully',
            user: user
        })
    }
    return res.status(500).json({
        message: 'Catched error while updating user',
        error: error
    })
}

export {
    updateUser
}