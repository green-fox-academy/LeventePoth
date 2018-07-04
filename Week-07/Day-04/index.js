'use strict'

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use(express.json());

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'reddit',
});

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/posts', (req, res) => {
    conn.query('SELECT * FROM posts;', (err, sending) => {
        if (err) {
            console.log(err);
            res.status(500).send();
            return;
        }
        res.json(sending)
        // res.render('home', {    // csak json küldünk még, nem kell render
        //     books,
        // });
    });
});

app.post('/posts', (req, res) => {
    const sql = `INSERT INTO posts (title, url) VALUES ('${req.body.title}', '${req.body.url}');`;
    conn.query(sql, (err, sending) => {
        if (err) {
            console.log(err);
            res.status(500).send();
            return;
        }
        res.json({
            sending,
        });
    });
});

app.put('/posts/:id/upvote', (req, res) => {
    let upvote = req.params.id;
    let sql = `UPDATE posts SET vote = '1', score = score+1 WHERE id = ('${req.params.id}')`;
    conn.query(sql, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send();
            return;
        }
        res.json({
            message: 'done',
        });
    });
});

app.put('/posts/:id/downvote', (req, res) => {
    let downvote = req.params.id;
    let sql = `UPDATE posts SET vote = '-1', score = score-1 WHERE id = ('${req.params.id}')`;
    conn.query(sql, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send();
            return;
        }
        res.json({
            message: 'done',
        });
    });
});

app.delete('/posts/:id', (req, res) => {
    // let valami = req.params.id;
    const sql1 = `DELETE FROM posts WHERE id = ('${req.params.id}')`;
    conn.query(sql1, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send();
            return;
        }
        res.json({
            message: 'post has been deleted'
        });
    });
});

app.put('/posts/:id', (req, res) => {
    if (req.body.title || req.body.url) {
        const fields = [];
        if (req.body.title) {
            fields.push(`title = '${req.body.title}'`);
        }
        if (req.body.url) {
            fields.push(`url = '${req.body.url}'`);
        }
        let sql = `UPDATE posts SET ${fields.join(', ')} WHERE id = ${req.params.id};`;
        conn.query(sql, (err) => {
            if (err) {
                console.log(err);
                res.status(500).send();
                return;
            }
            res.json({
                message: 'done',
            });
        });
    } else {
        res.send('no data found');
    }

    /*

    if (req.body.title) {
        const sql = `UPDATE posts SET title = '${req.body.title}',  WHERE id = ('${req.params.id}')`;
        conn.query(sql, (err) => {
            if (err) {
                console.log(err);
                res.status(500).send();
                return;
            }

            res.json({
                message: 'done',
            });
        });
    }
    if (req.body.url) {
        const sql = `UPDATE posts SET url = ? WHERE id = ?`;
        const sqlInputs = [req.body.url, req.params.id];
        conn.query(sql, sqlInputs, (err) => {
            if (err) {
                console.log(err);
                res.status(500).send();
                return;
            }

            res.json({
                message: 'done',
            });
        });
    }
    */
});



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
