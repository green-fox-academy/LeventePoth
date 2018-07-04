'use strict'

const express = require('express')
const app = express();
const PORT = 3000;

let cars = [
    { id: 1, brand: 'BMW', type: 'x6' },
    { id: 2, brand: 'Audi', type: 'TT' },
];

app.use(express.json());

app.get('/ping', (req, res) => {
    res.json({
        message: 'pong'
    })
})

app.get('/api/cars', (req, res) => {
    res.json({
        cars,
    });
});

app.delete('/api/cars', (req, res) => {
    cars.pop();
    res.json({
        message: 'Car has been deleted',
    })
})

app.delete('/api/cars/:id', (req, res) => {
    let carIndex = -1;
    cars.forEach((car, index) => {                  // az index itt 1-es // a car itt az elementek az arrayban, index, pedig az index-e
        if (car.id === parseInt(req.params.id)) {               // ha a car element id-je megeggyezik a /2-vel
            carIndex = index;                               // akkor carInedx legyen egyenlő 1-el
        }
    });

    if (carIndex !== -1) {
        cars.splice(carIndex, 1);
    }

    let message = '';
    if (carIndex !== -1) {
        message = 'Car has been deleted';
    } else {
    message = 'This car is not in the array'
    }

    res.json({
        message, // message: message
    })
})


app.post('/api/cars', (req, res) => {
    const { brand, type } = req.body;
    cars.push({
        id: cars.length + 1,
        brand,         // brand: req.body.brand,
        type,
    })
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

module.exports = app;
