'use strict'

const {
    Answer
} = require('../models');

const index = async (req, res, next) => {
    try {
        let page = req.query.page || 1; 
        const resp = await Answer.getAll(page);
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message});
    }
}

const view = async (req, res, next) => {
    try {
        const id = req.params.id;
        const resp = await Answer.getOne(id);
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const create = async (req, res, next) => {
    try {
        const data = req.body;
        const resp = await Answer.create(data);
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const resp = await Answer.update(id, data);
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }    
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id;
        const resp = await Answer.remove(id);
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

module.exports = {
    nameResourse: 'answer',
    index,
    view,
    create,
    update,
    remove
}