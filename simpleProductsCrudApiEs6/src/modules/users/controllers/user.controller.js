import { connection } from '../../../../DB/dbConnection.js'

const getAllUsers = (req, res, next) => {
    connection.execute(`SELECT * FROM users`,
        (err, result) => {
            if (err) {
                res.json({ message: `${err}` })
            } else {
                res.json(result)
            }
        }
    );
};

export { getAllUsers };