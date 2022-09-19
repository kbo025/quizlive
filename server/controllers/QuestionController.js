'use strict'

const {
    Question
} = require('../models');

const index = async (req, res, next) => {
    try {
        let page = req.query.page || 1; 
        const resp = await Question.getAll(page);
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message});
    }
}

const view = async (req, res, next) => {
    try {
        const id = req.params.id;
        const resp = await Question.getOne(id);
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const create = async (req, res, next) => {
    try {
        const data = req.body;
        const resp = await Question.create(data);
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const resp = await Question.update(id, data);
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }    
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id;
        const resp = await Question.remove(id);
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

module.exports = {
    nameResourse: 'question',
    index,
    view,
    create,
    update,
    remove
}