
// update product by product  owner
// http://localhost:4800/products/update/1 PUT
// data: {name, description, price, category_id, createdBy}

import { connection } from '../../../../DB/dbConnection.js'

// update product
//   - if product exists in owner products
//   - if given category exists
//   - if given owner exists

const updateProduct = (req, res, next) => {
    const id = req.params.id;
    const { name, description, price, category_id, createdBy } = req.body;
    let check_query = `SELECT * FROM products WHERE id = '${id}'`;
    let update_query = `UPDATE products SET name = '${name}', description = '${description}', price = '${price}', category_id = '${category_id}', createdBy = '${createdBy}' WHERE id = '${id}'`;
    let check_category_query = `SELECT * FROM categories WHERE id = '${category_id}'`;
    let check_owner_query = `SELECT * FROM users WHERE id = '${createdBy}'`;

    connection.execute(check_query, (err, result) => {
        if (err) {
            res.json({ message: `${err}` })
        }
        else {
            if (result.length == 0) {
                res.json({ message: 'Product does not exist' })
            }
            else {
                connection.execute(check_category_query, (err, result) => {
                    if (err) {
                        res.json({ message: `${err}` })
                    }
                    else {
                        if (result.length == 0) {
                            res.json({ message: 'Category does not exist' })
                        }
                        else {
                            connection.execute(check_owner_query, (err, result) => {
                                if (err) {
                                    res.json({ message: `${err}` })
                                }
                                else {
                                    if (result.length == 0) {
                                        res.json({ message: 'Owner does not exist' })
                                    }
                                    else {
                                        connection.execute(update_query, (err, result) => {
                                            if (err) {
                                                res.json({ message: `${err}` })
                                            }
                                            else {
                                                res.json({ message: 'Product updated successfully' })
                                            }
                                        })
                                    }
                                }
                            })
                        }
                    }
                })
            }
        }
    });
}


export { updateProduct }