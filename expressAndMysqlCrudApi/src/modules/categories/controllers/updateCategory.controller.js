// update category  by product owner 
// http://localhost:4800/categories/update/1 PUT
// data: {name, createdBy}import { connection } from '../../../../DB/dbConnection.js'
import { connection } from '../../../../DB/dbConnection.js'

const updateCategory = (req, res, next) => {
    const id = req.params.id;
    const { name, createdBy } = req.body;
    let check_query = `SELECT name FROM categories WHERE createdBy = '${createdBy}' AND id = ${id}`;
    let update_query = `UPDATE categories SET name = '${name}' WHERE id = ${id} AND createdBy = '${createdBy}'`;

    connection.query(check_query, (err, result) => {
        if (err) {
            res.json({ message: `${err}` });
        } else if (result.length === 0) {
            res.json({ message: `No category found with id: ${id} and created by: ${createdBy}` });
        } else {
            let nameFromDB = result[0].name;
            if (nameFromDB === name) {
                res.json({ message: `Category name already exists on your categories` });
            } else {
                connection.query(update_query, (err, result) => {
                    if (err) {
                        res.json({ message: `${err}` });
                    } else {
                        res.json({ message: `Category ${name} updated on user ${createdBy} categories` });
                    }
                });
            }
        }
    });
};

export { updateCategory };
