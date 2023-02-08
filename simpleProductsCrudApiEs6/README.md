## NodeJs CRUD & Mysql
This is an API that manages a database of users, categories and products. The database contains three tables: USERS, CATEGORIES and PRODUCTS. The USERS table contains information about users such as their id, email, name and password. The CATEGORIES table contains information about categories such as their id, name and the user who created them. The PRODUCTS table contains information about products such as their id, name, description, price, the category they belong to, and the user who created them. The API provides various routes for adding, retrieving, updating and deleting data from the USERS, CATEGORIES and PRODUCTS tables.




# DB Tables
    ## USERS TABLE
        - id (primary key)
        - email
        - name
        - password
    
    ## CATEGORIES TABLE
        - id (primary key)
        - name
        - createdBy (foreign key referencing the "id" column in the USERS table)
    
    ## PRODUCTS TABLE
        - id (primary key)
        - name
        - description
        - price
        - category (foreign key referencing the "id" column in the CATEGORIES table)
        - createdBy (foreign key referencing the "id" column in the USERS table)
    

# Api Endpoints

    ## USER ROUTES
        ### add user POST
            - /users/add
            - data : {email, name, password}

        ### get all users GET
            - /users

        ### get user by id GET
            - /users/:id
            
        ### update user PUT
            - /users/update/:id
            - data : {"email":"", "name":"", "password":""}

        ### delete user DELETE
            - /users/delete/:id

    ## CATEGORY ROUTES   
    
        ### add category POST   
            - /categories/add
            - data : {"name" ;"", "createdBy": 1}

        ### get all categories GET
            - /categories
        
        ### update category PUT
            - /categories/update/:id
            - data : {"name":"", "createdBy":1}

        ### delete category DELETE
            - /categories/delete/:id
        
    ## PRODUCT ROUTES
        ### add product POST
            - /products/add
            - data : {"name":"", "description":"", "price":"", "category_id":"", "createdBy":""}

        ### get all products GET
            - /products

        ### get product by name GET
            - /products/searchbyname/:name

        ### get product by user id GET
            - /products/searchbyid/:userId

        ### add product POST
            - /products/add
            - data : {"name":"", "description":"", "price":"", "category_id":"", "createdBy":""}
        
        ### update product PUT
            - /products/update/:id
            - data : {"name":"", "description":"", "price":"", "category_id":"", "createdBy":""}       
        
        ### delete product DELETE
            - /products/delete/:id
