// add product
// http://localhost:4800/products/add POST
// data: {name, description, price, category_id, createdBy}
import { connection } from '../../../../DB/dbConnection.js'


// add product
//   - if product does not exist in owner products
//   - if given category exists
//   - if given owner exists

const addProduct = (req, res, next) => {
    const { name, description, price, category_id, createdBy } = req.body;
    let check_query = `SELECT * FROM products WHERE name = '${name}' AND createdBy = '${createdBy}'`;
    let insert_query = `INSERT INTO products (name, description, price, category_id, createdBy) VALUES ('${name}', '${description}', '${price}', '${category_id}', '${createdBy}')`;
    let check_category_query = `SELECT * FROM categories WHERE id = '${category_id}'`;
    let check_owner_query = `SELECT * FROM users WHERE id = '${createdBy}'`;

    connection.execute(check_query, (err, result) => {
        if (err) {
            res.json({ message: `${err}` })
        }
        else {
            if (result.length > 0) {
                res.json({ message: 'Product already exists' })
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
                                        connection.execute(insert_query, (err, result) => {
                                            if (err) {
                                                res.json({ message: `${err}` })
                                            }
                                            else {
                                                res.json({ message: 'Product added successfully' })
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

export { addProduct }