import { connection } from '../../../../DB/dbConnection.js'

const deleteUser = (req, res, next) => {
    const id = req.params.id;
    // check if user exists
    connection.execute(`SELECT * FROM users WHERE id = ${id}`,
        (err, result) => {
            if (err) {
                res.json({ message: `${err}` })
            } else {
                if (result.length > 0) {
                    connection.execute(`DELETE FROM users WHERE id = ${id}`, (err, result) => {
                        if (err) {
                            res.json({ message: 'Error' })
                        } else {
                            res.json({ message: `User deleted successfully` })
                        }
                    }
                    );
                } else {
                    res.json({ message: 'User does not exist' })
                }
            }
        }
    );
};

export { deleteUser };