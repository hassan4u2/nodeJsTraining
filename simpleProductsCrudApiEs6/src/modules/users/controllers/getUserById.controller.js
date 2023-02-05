
import { connection } from '../../../../DB/dbConnection.js'

const getUserById = (req, res) => {
    connection.execute(`SELECT * FROM users WHERE id = ?`, [req.params.id],
        (err, result) => {
            if (err) {
                res.json({ message: `${err}` })
            } else {
                res.json(result)
            }
        }
    );
};

export { getUserById };