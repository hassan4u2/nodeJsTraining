
# ExpressSequelize API

## Description
-This project is a RESTful API built using Express.js and Sequelize ORM. The API provides endpoints for managing users and products. The API includes endpoints for user authentication, such as sign-up and login, as well as endpoints for CRUD operations on both users and products.

## Installation
1. Clone the repository: git clone https://github.com/your-username/express-sequelize-api.git
2. Install dependencies: npm install
3. Start the development server: npm run dev

## Usage
- To use this API, you can send HTTP requests to the endpoints using a tool like Postman. The API provides the following endpoints:


# User Endpoints
- POST /auth/signup - Creates a new user account
- POST /auth/login - Logs in a user
- PATCH /user/update/:id - Updates a user by ID
- DELETE /user/delete/:id - Deletes a user by ID
- GET /user/all - Gets all users
- POST /user/users_by_ids - Gets a list of users by ID
- GET /user - Home route for logged-in users
- GET /user/users_lt_30 - Gets all users who are under 30 years old


# Product Endpoints
- POST /product/add - Adds a new product
- GET /product/all - Gets all products
- PATCH /product/update/:id - Updates a product by ID
- DELETE /product/delete/:id - Deletes a product by ID
- GET /product/gt3000 - Gets all products with a price greater than 3000
