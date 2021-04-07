const { Router } = require('express');
const Dancer = require('../models/Dancer');
const pool = require('../utils/pool');

module.exports = Router()
    .post('/', async (req, res, next) => {
        try {
            const newDancer = await Dancer.insert(req.body);

            res.send(newDancer);

        } catch (err) {
            
            next(err)
        }
    });