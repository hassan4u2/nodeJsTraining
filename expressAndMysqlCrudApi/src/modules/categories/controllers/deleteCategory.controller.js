// delete category by product owner
// http://localhost:4800/categories/delete/1 DELETE

import { connection } from '../../../../DB/dbConnection.js'

const deleteCategory = (req, res, next) => {
    const id = req.params.id;
    connection.execute(`DELETE FROM categories WHERE id = ${id}`, (err, result) => {
        if (err) {
            res.json({ message: `${err}` })
        } else {
            res.json({ message: `Category deleted successfully` })
        }
    }
    );
};
export { deleteCategory };