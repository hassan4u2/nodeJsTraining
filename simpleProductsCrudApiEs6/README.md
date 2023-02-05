## NodeJs CRUD & Mysql

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
            - data : {email, name, password}

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
            - data : {name, createdBy}

        ### delete category DELETE
            - /categories/delete/:id
        
    ## PRODUCT ROUTES
        ### add product POST
            - /products/add
            - data : {name, description, price, category, createdBy}

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
