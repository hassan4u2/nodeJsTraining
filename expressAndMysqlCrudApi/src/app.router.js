import { addUserRouter } from './modules/users/routes/addUser.router.js';
import { usersRouter } from './modules/users/routes/user.router.js';
import { updateUserRouter } from './modules/users/routes/updateUser.router.js';
import { deleteUserRouter } from './modules/users/routes/deleteUser.router.js';
import { getUserByIdRouter } from './modules/users/routes/getUserById.router.js';

import { addCategoryRouter } from './modules/categories/routes/addCategory.router.js';
import { categoriesRouter } from './modules/categories/routes/category.router.js';
import { updateCategoryRouter } from './modules/categories/routes/updateCategory.router.js';
import { deleteCategoryRouter } from './modules/categories/routes/deleteCategory.router.js';

import { addProductRouter } from './modules/products/routes/addProduct.router.js';
import { productsRouter } from './modules/products/routes/product.router.js';
import { updateProductRouter } from './modules/products/routes/updateProduct.router.js';
import { deleteProductRouter } from './modules/products/routes/deleteProduct.router.js';

import { getProductsByNameRouter } from './modules/products/routes/getProductsByName.router.js';
import { getUserProductsRouter } from './modules/products/routes/getProductsByUserId.router.js';



const initApp = (app, express) => {

    // middleware
    app.use(express.json());

    // routes
    // user routes
    app.use(addUserRouter);
    app.use(usersRouter);
    app.use(updateUserRouter);
    app.use(deleteUserRouter);
    app.use(getUserByIdRouter);
    // category routes
    app.use(addCategoryRouter);
    app.use(categoriesRouter);
    app.use(updateCategoryRouter);
    app.use(deleteCategoryRouter);
    // product routes
    app.use(addProductRouter);
    app.use(productsRouter);
    app.use(updateProductRouter);
    app.use(deleteProductRouter);
    // search routes
    app.use(getProductsByNameRouter);
    app.use(getUserProductsRouter);
    // 404
    app.use("*", (req, res) => {
        res.status(404).json({ message: "Page not found" });
    });

}

export { initApp };