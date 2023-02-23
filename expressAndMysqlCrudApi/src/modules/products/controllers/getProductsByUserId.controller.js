
import { connection } from '../../../../DB/dbConnection.js'

const getUserProducts = (req, res, next) => {
    connection.execute(`SELECT products.id, products.name, products.description, products.price, products.category_id, products.createdBy, users.name AS user, categories.name AS category FROM products INNER JOIN users ON products.createdBy = users.id INNER JOIN categories ON products.category_id = categories.id`, (err, result) => {
        if (err) {
            res.json({ message: 'Products not found' })
        } else {
            res.json(result)
        }
    }
    );
}

export { getUserProducts };

