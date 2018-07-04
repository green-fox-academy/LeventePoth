'use strict'

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

app.set('view engine', 'ejs');
app.get('assets/books.js', (req, res) => {

})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

    app.get('/api/books', (req, res) => {
        let sql = 'SELECT book_name from book_mast;';
        let queryInputs = [];

    conn.query(sql, queryInputs, (err, rows) => {                   // az sql, queryInputsheylére is mehetne a "SELECT...."
            if (err) {
                console.log(err);
                res.status(500).send();
                return
            }
            res.json({
                authors: rows,
            })
        })
});

app.get('/api/books', (req, res) => {
    let sql = 'SELECT book_name, aut_name, cate_de... from book_mast....Wherer aut.id = ...;';
    let queryInputs = [];

conn.query(sql, queryInputs, (err, rows) => {                   // az sql, queryInputsheylére is mehetne a "SELECT...."
        if (err) {
            console.log(err);
            res.status(500).send();
            return
        }
        res.json({
            authors: rows,
        })
    })
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} `);
});


// ezt elküldöm HTML-be GET segítségével
// egy script.js segítségével elkapom és beteszem a HTML-be
