'use strict'

const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', (req, res) => {
    if (req.query.input) {
        res.json({
            received: req.query.input,
            result: req.query.input * 2
        })
    }
    res.json({
        error: "Please provide an input!"
    })
})


app.get('/greeter', (req, res) => {
    if (req.query.name && req.query.title) {
        res.json({
            welcome_message: `Oh, hi there ${req.query.name},  dear ${req.query.title}!`
        })
    }
    res.json({
        error: "Please provide a name!"
    })
})

app.get('/appenda/:word', (req, res) => {
    if (req.params.word) {
        res.json({
            appended: `${req.params.word}a`
        })
    }
    else {
        res.json({
            key: "404"
        })
    }
})

app.post('dountil/:what', (req, res) => {
    const until = req.body.until;
    let number1 = 0
    if (req.params.what = "sum") {
        for (let i = 0; i < until; i++) {
            i += number1
        }
        res.json({
            result: number1
        })
    }
    let number2 = 1
    if (req.params.what = "faktor") {
        for (let i = 0; i < until; i++) {
            i *= number2
        }
        res.json({
            result: number2
        })
    }
    res.json({
        error: "Please provide a number!"
    })
});

app.post('/arrays', (req, res) => {
    const what = req.body.what;
    const numbers = req.body.numbers;
    // let number1 = 0
    if (req.params.what = "sum") {
        for (let i = 0; i < numbers; i++) {
            i += number1
        }
        res.json({
            result: number1
        })
    }
    // let number2 = 1
    if (req.params.what = "multiply") {
        for (let i = 0; i < until; i++) {
            i *= number2
        }
        res.json({
            result: number2
        })
    }
    if (req.params.what = "double") {
        for (let i = 0; i < until; i++) {
            i *= number2
        }
        res.json({
            result: number2
        })
    }
    res.json({
        error: "Please provide a number!"
    })
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} `);
});

module.exports = app;