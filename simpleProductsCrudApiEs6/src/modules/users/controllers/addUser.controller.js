import { connection } from '../../../../DB/dbConnection.js'



function validateUserData(email, name, password) {
    // error messages object
    let errors_msg = {};
    // check if any field is empty
    if (!email || !name || !password) {
        errors_msg.empty = 'Please fill in all fields';
    }
    // check if name is numeric
    if (!isNaN(name)) {
        errors_msg.name = 'Name must be a string';
    }
    // check if email is valid
    if (email.length < 6 && !email.includes('@')) {
        errors_msg.email = 'Please enter a valid email';
    }
    // check if password is more than 6 characters
    if (password.length < 6) {
        errors_msg.password = 'Password must be at least 6 characters';
    }
    return errors_msg;
};

const addUser = (req, res, next) => {
    const { email, name, password } = req.body;
    // validate user data
    let errors_msg = validateUserData(email, name, password);

    // queries
    let check_query = `SELECT * FROM users WHERE email = '${email}'`;
    let add_user_query = `INSERT INTO users(email, name, password) VALUES('${email}', '${name}', '${password}')`;

    // check if user exists and check if there are any errors in errors_msg object
    connection.execute(check_query, (err, result) => {
        if (err) {
            res.json({ message: `${err}` })
        } else {
            if (result.length > 0) {
                res.json({ message: 'User already exists' })
            } else {
                if (Object.keys(errors_msg).length > 0) {
                    res.json(errors_msg)
                } else {
                    connection.execute(add_user_query, (err, result) => {
                        if (err) {
                            res.json({ message: 'Error (ADDING USER)' })
                        } else {
                            res.json({ message: `User ${email} added successfully` })
                        }
                    }
                    );
                }
            }
        }
    }
    );
};


export {
    addUser
};