// get all categories
// http://localhost:4800/categories GET

import { connection } from '../../../../DB/dbConnection.js'

const getAllCategories = (req, res, next) => {
    connection.execute(`SELECT * FROM categories`,
        (err, result) => {
            if (err) {
                res.json({ message: `${err}` })
            } else {
                res.json(result)
            }
        }
    );
};

export { getAllCategories };