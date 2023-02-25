import { userModel } from '../../../../DB/model/User.model.js'

const homePage = (req, res, next) => {
    return res.json({ message: 'authPage' })
}

const userLogin = async (req, res, next) => {
    const { cliEmail, cliPassword } = req.body
    if (!cliEmail || !cliPassword) {
        return res.status(400).json({ message: 'User login error', error: 'Missing required fields' })
    }
    // find the user <== findone() returns a first document that matches the query
    const user = await userModel.findOne({ cliEmail, cliPassword })
    return user ? res.json({ message: 'User Login', user }) : res.status(400).json({ message: 'User Login', error: 'Invalid creditinals' })
}

const userSignUp = async (req, res, next) => {
    // new instanc 1
    // await userModel.create({ cliName, cliEmail, cliPassword })

    try {
        const { cliName, cliEmail, cliPassword, cliAge } = req.body
        if (!cliName || !cliEmail || !cliPassword) {
            return res.status(400).json({ message: 'User signup error', error: 'Missing required fields' })
        }
        // new instanc 2 <== get predefined document before saving
        const newUser = new userModel({ cliName, cliEmail, cliPassword, cliAge })
        // save the new user
        await newUser.save()
        return res.json({ message: 'User SignUp', newUser })
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: 'User signup catched error', error: 'Email already exists' })
        }
        return res.status(500).json({ message: 'User signup catched error(server)', error })
    }
}


export {
    homePage,
    userLogin,
    userSignUp
}
