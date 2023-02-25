# expressMongooseApi

This is a sample Express.js REST API using MongoDB with Mongoose. It provides endpoints for user authentication and comments.

## Data

The API stores data in a MongoDB database using Mongoose.

## Usage

1. Clone the repository.
2. Run `npm install` to install the required packages.
3. Start the server by running `npm run dev`.
4. The API can now be accessed on `http://localhost:5100`.

## Endpoints

### UserEndpoint

#### Auth

- **AuthHomePage**

  `GET /auth/`

  This endpoint returns the homepage for user authentication.

- **Login**

  `POST /auth/login`

  This endpoint logs in a user by their email and password.

  Sample request body:

```{
"cliEmail": "e4567@gmail.com",
"cliPassword": "noyan2"
}```



- **SignUp**

`POST /auth/signup`

This endpoint creates a new user.

Sample request body:

```
{
"cliName": "hassan",
"cliEmail": "hassan@gmail.com",
"cliPassword": "noyan2",
"cliAge": 30
}
```



#### Comment

- **CommentHomePage**

`GET /comment/`

This endpoint returns the homepage for comments.

- **AddComment**

`POST /comment/add`

This endpoint adds a new comment.

Sample request body:


```
{
"content": "c22asdsadgaswdgsadg3",
"userId": "63f95899fcb3744750b99cb0"
}
```

- **GetCommentsWithUsersData**

`GET /comment/all`

This endpoint returns all comments with associated user data.

- **UpdateCommentByOwner**

`PUT /comment/update/:id`

This endpoint updates a comment by the owner.

Sample request body:



```
{
"content": "updated11111",
"userId": "63f963e22423af47c8971d6e"
}
```

- **DeleteCommentByOwner**

`DELETE /comment/delete/:id`

This endpoint deletes a comment by the owner.

Sample request body:



```
{
"userId": "63f95899fcb3744750b99cb0"
}


```



- **GetCommentById**

`GET /comment/:id`

This endpoint returns a comment by ID.

### UserHomePage

- **UserHomePage**

`GET /user/`

This endpoint returns the homepage for users.

- **GetAllUsers**

`GET /user/all`

This endpoint returns all users.

- **deleteUser**

`DELETE /user/delete/:id`

This endpoint deletes a user.

- **updateUser**

`PUT /user/update/:id`

This endpoint updates a user.

Sample request body:



```
{
"cliName": "updated 1",
"cliEmail": "updated@gmail.com",
"cliPassword": "noyan2",
"cliAge": 20
}
```

- **search_user_bry_id**

`GET /user/get/:id`

This endpoint returns a user by ID.

- **search_st_x_lt_y**

`GET /user/get/search_st_x_lt_y/:str/:x`

This endpoint returns all users whose field (name or email) starts with a given string and whose age is less than a given value.

- **
