// create connection
import { createConnection } from 'mysql2';

let dbName = 'ass4node';
const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: dbName
},
    console.log(`Connected to database "${dbName}"`)
);

export { connection }