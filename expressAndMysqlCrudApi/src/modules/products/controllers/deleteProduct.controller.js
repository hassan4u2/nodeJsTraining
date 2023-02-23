// delete product
// http://localhost:4800/products/delete/1 DELETE

import { connection } from '../../../../DB/dbConnection.js'


// delete product
//   - if product exists in owner products

const deleteProduct = (req, res, next) => {
    const id = req.params.id;
    let check_query = `SELECT * FROM products WHERE id = '${id}'`;
    let delete_query = `DELETE FROM products WHERE id = '${id}'`;

    connection.execute(check_query, (err, result) => {
        if (err) {
            res.json({ message: `${err}` })
        }
        else {
            if (result.length == 0) {
                res.json({ message: 'Product does not exist' })
            }
            else {
                connection.execute(delete_query, (err, result) => {
                    if (err) {
                        res.json({ message: `${err}` })
                    }
                    else {
                        res.json({ message: 'Product deleted successfully' })
                    }
                })
            }
        }
    });
}

export { deleteProduct }