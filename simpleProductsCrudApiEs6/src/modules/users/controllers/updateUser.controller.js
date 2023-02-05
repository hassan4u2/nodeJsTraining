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

const updateUser = (req, res, next) => {
    const id = req.params.id;
    const { email, name, password } = req.body;
    // validate user data
    let errors_msg = validateUserData(email, name, password);

    // queries
    let update_user_query = `UPDATE users SET email = '${email}', name = '${name}', password = '${password}' WHERE id = ${id}`;

    if (Object.keys(errors_msg).length > 0) {
        res.json({ message: errors_msg })
    } else {
        connection.execute(update_user_query, (err, result) => {
            if (err) {
                res.json({ message: `${err}` })
            } else {
                // check if updated user exists
                connection.execute(`SELECT * FROM users WHERE id = ${id}`, (err, result) => {
                    if (err) {
                        res.json({ message: 'Error' })
                    } else {
                        if (result.length > 0) {
                            res.json({ message: `User updated successfully` })
                        } else {
                            res.json({ message: 'User does not exist' })
                        }
                    }
                });
            }
        });
    }
};

export { updateUser };