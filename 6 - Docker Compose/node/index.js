const express = require('express');
const mysql = require('mysql2');

const { env } = require('process');
const app = express();

const { PORT, APP_DATABASE_HOST, APP_DATABASE, APP_USER, APP_PASSWORD } = env;

console.log('Database params', { PORT, APP_DATABASE_HOST, APP_DATABASE, APP_USER, APP_PASSWORD });

app.use(express.json());
app.get('/', async (req, res) => {
    const queryResult = await query('select firstName, lastName from People p LIMIT 1;');

    res.json({
        response: 'Hello World',
        queryResult,
    });
});

const query = (sql) => {
    return new Promise((resolve, reject) => {
        let connection = mysql.createConnection({
            host: APP_DATABASE_HOST,
            user: APP_USER,
            password: APP_PASSWORD,
            database: APP_DATABASE
        });
        connection.query(sql, (err, rows) => {
            if (err) {
                connection.end();
                reject(err);
            } else {
                connection.end();
                resolve(rows);
            }
        });
    });
}


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));