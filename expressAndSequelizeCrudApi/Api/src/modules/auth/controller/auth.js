import { userModel } from '../../../../DB/model/User.model.js'

const authHome = (req, res, next) => {
    res.json({ message: 'AuthModule' })
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
            res.json({ message: 'User Created', user })
        } catch (error) {
            if (error.original?.errno == 1062) {
                return res.json({
                    message: 'signUp Catch Error',
                    error: 'Email Already Exists'
                })
            } else {
                return res.json({
                    message: 'signUp Catch Error',
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
                where: {
                    email: email
                }
            })
            if (!checkUser) {
                return res.status(400).json({
                    message: 'User Does Not Exist'
                })
            } else if (checkUser.password !== password) {
                return res.status(400).json({
                    message: 'Password is Incorrect'
                })
            } else if (checkUser.password == password && checkUser.email == email) {
                res.json({ message: 'User Logged In', checkUser })
            }

        } catch (error) {
            res.json({
                message: 'login Catch Error',
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