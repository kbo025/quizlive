'use strict'

const {
    Room
} = require('../models');

const index = (req, res, next) => {
    try {
        let page = req.query.page || 1; 
        const resp = Room.getAll(page);
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message});
    }
}

const view = (req, res, next) => {
    try {
        const id = req.params.id;
        const resp = Room.getOne(id);
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const create = (req, res, next) => {
    try {
        const data = req.body;
        const resp = Room.create(data);
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const update = (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const resp = Room.update(id, data);
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }    
}

const remove = (req, res, next) => {
    try {
        const id = req.params.id;
        const resp = Room.remove(id);
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

module.exports = {
    nameResourse: 'room',
    index,
    view,
    create,
    update,
    remove
}