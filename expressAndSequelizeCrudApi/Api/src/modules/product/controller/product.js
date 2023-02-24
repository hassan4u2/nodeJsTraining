import { productModel } from "../../../../DB/model/Product.model.js";
import { userModel } from "../../../../DB/model/User.model.js";
import { Op } from "sequelize";

const productHome = (req, res, next) => {
    return res.json({ message: 'ProductModule' })
}

const addProduct = async (req, res, next) => {
    const { pName, pPrice, pDescription, createdBy } = req.body;
    if (!pName || !pPrice || !pDescription || !createdBy) {
        return res.status(400).json({ message: 'Please fill all fields' })
    }
    try {
        const product = await productModel.create({
            pName,
            pPrice,
            pDescription,
            createdBy
        })
        if (product) {
            return res.json({ message: `Product ${pName} createdBy user ${createdBy} added` })
        }
    } catch (err) {
        if (err.orignal?.errno === 1062) {
            return res.status(400).json({ message: 'Product already exists' })
        } else if (err.orignal?.errno === 1452) {
            return res.status(400).json({ message: 'User does not exist' })
        }
        return res.status(500).json({
            message: 'Error creating product',
            error: err.stack
        })

    }

}

const updateProduct = async (req, res, next) => {
    // update product by id
    // only allowed for the product owner
    const { pName, pPrice, pDescription } = req.body;
    const { id } = req.params;
    if (!pName || !pPrice || !pDescription) {
        return res.status(400).json({ message: 'Please fill all fields' })
    }
    try {
        const product = await productModel.update({
            pName,
            pPrice,
            pDescription
        }, {
            where: {
                id
            }
        })
        if (product) {
            return res.json({ message: `Product ${pName} updated` })
        }
    } catch (err) {
        if (err.orignal?.errno === 1062) {
            return res.status(400).json({ message: 'Product already exists' })
        } else if (err.orignal?.errno === 1452) {
            return res.status(400).json({ message: 'User does not exist' })
        }
        return res.status(500).json({
            message: 'Error updating product',
            error: err.stack
        })
    }
}

const deleteProduct = async (req, res, next) => {
    // delete product by id
    // only allowed for the product owner
    const { id } = req.params;
    try {
        const product = await productModel.destroy({
            where: {
                id
            }
        })
        if (product) {
            return res.json({ message: `Product deleted` })
        } else {
            return res.status(400).json({ message: `Product not found` })
        }
    }
    catch (err) {
        return res.status(500).json({
            message: 'Error deleting product',
            error: err.stack
        })
    }

}

const getAllProducts = async (req, res, next) => {
    try {
        const products = await productModel.findAll({
            attributes: { exclude: ['createdBy'] },
            include: [{
                model: userModel,
                attributes: ['id', 'name', 'email']

            }]

        });
        if (products) {
            return res.json({
                message: 'All products',
                products
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: 'Error getting products',
            error: err.stack
        })
    }
}


const searchProductsGt3000 = async (req, res, next) => {
    // search for products where the price is greater than 3000
    try {
        const products = await productModel.findAll({
            where: {
                pPrice: {
                    [Op.gt]: 3000
                }
            },
            attributes: { exclude: ['createdBy'] },
            include: [{
                model: userModel,
                attributes: ['id', 'name', 'email']

            }]

        });
        if (products) {
            return res.json({
                message: 'All products with price greater than 3000',
                products
            })
        }
    }
    catch (err) {
        return res.status(500).json({
            message: 'Error getting products',
            error: err.stack
        })
    }


}

export {
    productHome,
    addProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    searchProductsGt3000
}