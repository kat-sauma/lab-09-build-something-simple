const { Router } = require('express');
const Dancer = require('../models/Dancer');
// const DancerService = require('../services/DancerService');
const pool = require('../utils/pool');

module.exports = Router()
    .post('/', async (req, res, next) => {
        try {
            const newDancer = await Dancer.insert(req.body);

            res.send(newDancer);

        } catch (err) {
            
            next(err)
        }
    })

    .get('/', async (req, res, next) => {
        try {
            const dancers = await Dancer.find();
            res.send(dancers);
        } catch (err) {

            next(err);
        }
    })

    .get('/:id', async (req, res, next) => {
        try {
            const dancer = await Dancer.findById(req.params.id);
            res.send(dancer);
        } catch (err) {

            next(err);
        }
    })

    .put('/:id', async (req, res, next) => {
        try {
            const dancer = await Dancer.update(req.params.id, req.body);
            res.send(dancer);

        } catch(err) {
            next(err)
        }
    })

    .delete('/:id', async (req, res, next) => {
        try {
            const dancer = await Dancer.delete(req.params.id);
            res.send(dancer);
        } catch(err) {
            next(err)
        }
    })