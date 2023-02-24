import { userModel } from '../../../../DB/model/User.model.js'

const authHome = (req, res, next) => {
    return res.json({ message: 'AuthModule' })
}

const signUp = async (req, res, next) => {
    /*
    // url: http://localhost:5100/auth/signup
    //data example : 
    {   
        "email": "email@email.com", 
        "password": "password123", 
        "name": 'nameas', 
        "age": 20 
    }
    */
    const { email, password, name, age } = req.body;
    // console.log("reciveddata", { email, password, name, age })

    if (!email || !password || !name || !age) {
        return res.status(400).json({ message: 'Please enter all fields' })
    } else {
        try {
            // fill the user model with the data 
            const user = await userModel.create(req.body, {
                // if i want store only some fields
                fields: ['email', 'password', 'name', 'age']
            })
            return res.json({ message: 'User Created', user })
        } catch (error) {
            if (error.original?.errno == 1062) {
                return res.status(400).json({
                    message: 'Email Already Exists'
                })
            } else {
                return res.status(500).json({
                    message: 'signUp Server Error',
                    error: error.stack
                })
            }
        }
    }
}
const login = async (req, res, next) => {
    /*
    // url: http://localhost:5100/auth/login
    //data example : 
    {
        "email": "hassab@emxail.com",
        "password": "password123"
    }
    */
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: 'Please enter all fields'
        })
    } else {
        try {
            // check if the user exist by method findOne 
            const checkUser = await userModel.findOne({
                attributes: ['password', 'name', 'age'],
                where: {
                    email: email
                }
            })
            if (!checkUser) {
                return res.status(400).json({
                    message: 'Email or Password is incorrect'
                })
            } else if (checkUser.password !== password) {
                return res.status(400).json({
                    // avoid brute force
                    message: 'Email or Password is incorrect'
                })
            } else if (checkUser.password === password) {
                return res.json({ message: 'User Logged In', checkUser })
            }

        } catch (error) {
            return res.status(500).json({
                message: 'login Server Error',
                error: error.stack
            })
        }
    }

}


export {
    authHome,
    signUp,
    login
}