// add category
// http://localhost:4800/categories/add POST
// data: {name, createdBy}


import { connection } from '../../../../DB/dbConnection.js'

const addCategory = (req, res, next) => {
    const { name, createdBy } = req.body;
    // add category to owner user if NAME MATCHES any of the owner's categories
    let check_query = `SELECT * FROM categories WHERE createdBy = '${createdBy}' AND name = '${name}'`;
    let add_query = `INSERT INTO categories (name, createdBy) VALUES ('${name}', '${createdBy}')`;

    connection.execute(check_query, (err, result) => {
        if (err) {
            res.json({ message: `${err}` })
        } else {
            if (result.length === 0) {
                connection.execute(add_query, (err, result) => {
                    if (err) {
                        res.json({ message: `${err}` })
                    } else {
                        res.json({ message: `Category added successfully` })
                    }
                });
            } else {
                res.json({ message: `Category already exists` })
            }
        }
    });
};

export { addCategory };