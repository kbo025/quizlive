'use strict'

const {
    Option
} = require('../models');

const index = async (req, res, next) => {
    try {
        let page = req.query.page || 1; 
        const option = await Option.getAll(page);
        const resp = await option.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message});
    }
}

const view = async (req, res, next) => {
    try {
        const id = req.params.id;
        const option = await Option.getOne(id);
        const resp = await option.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const create = async (req, res, next) => {
    try {
        const data = req.body;
        const option = await Option.create(data);
        const resp = await option.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const option = await Option.update(id, data);
        const resp = await option.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }    
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id;
        const success = await Option.remove(id);
        res.json({ success });
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

module.exports = {
    nameResourse: 'option',
    index,
    view,
    create,
    update,
    remove
}