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


const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params

        const user = await userModel.findById(id)
        if (!user) {
            return res.json({ message: 'User not found' })
        }
        return res.json(user)

    } catch (error) {
        return res.json({
            message: 'Catched error',
            error: error.stack
        })
    }
}

const getUsersWithNameStartsWithXAndAgeLessThanY = async (req, res, next) => {
    try {
        const { stw, age } = req.params;
        // console.log(stw, age);
        const users = await userModel.find({
            $and: [
                { cliName: { $regex: `^${stw}` } },
                { cliAge: { $lt: age } }
            ]
        });
        return res.json(users);
    } catch (error) {
        return res.json({
            message: 'Catched error',
            error: error
        })
    }
}

const getUsersWithNameEndsWithX = async (req, res, next) => {
    try {
        const { endw } = req.params;
        // console.log(endw);
        const users = await userModel.find({
            cliName: { $regex: `${endw}$` }
        });
        return res.json(users);
    } catch (error) {
        return res.json({
            message: 'Catched error',
            error: error
        })
    }
}

const getUsersWithNameContainsX = async (req, res, next) => {
    try {
        const { cont } = req.params;
        const users = await userModel.find({
            cliName: { $regex: `${cont}` }
        });
        return res.json(users);
    } catch (error) {
        return res.json({
            message: 'Catched error',
            error: error
        })
    }
}

const getMatchedUsers = async (req, res, next) => {
    try {
        const { match } = req.params;
        const users = await userModel.find({
            cliName: { $regex: `^${match}$` }
        });
        return res.json(users);
    } catch (error) {
        return res.json({
            message: 'Catched error',
            error: error
        })
    }
}
const getUsersWithAgeBetween20And50 = async (req, res, next) => {
    const { min, max } = req.params;
    try {
        const users = await userModel.find({
            $and: [
                { cliAge: { $gte: min } },
                { cliAge: { $lte: max } }
            ]
        })
        return res.json(users)
    } catch (error) {
        return res.json({
            message: 'Catched error',
            error: error
        })
    }
}

export {
    homePage,
    getAllUsers,
    getUserById,
    getUsersWithNameStartsWithXAndAgeLessThanY,
    getUsersWithNameEndsWithX,
    getUsersWithNameContainsX,
    getMatchedUsers,
    getUsersWithAgeBetween20And50

}
