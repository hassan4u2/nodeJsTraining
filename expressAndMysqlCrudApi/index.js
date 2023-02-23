// Description: Node.js Assignment 4 Solution - ES6

// imports
import express from 'express';
import { connection } from './DB/dbConnection.js';


// server
const port = 4800;
const app = express();

// local imports
import { createTables } from './DB/tbsCreation.js';
import { initApp } from './src/app.router.js';

// init app
initApp(app, express);


// listen to port
app.listen(port, () => {
    console.log(`Server running on port "${port}"`);
    // create tables
    createTables(connection);
});