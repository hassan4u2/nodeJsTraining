// get all products
// http://localhost:4800/products GET

import { connection } from '../../../../DB/dbConnection.js'

const getAllProducts = (req, res, next) => {
    connection.execute(`SELECT * FROM products`, (err, result) => {
        if (err) {
            res.json({ message: 'Product does not exist' })
        } else {
            res.json(result)
        }
    }
    );
}

export { getAllProducts }