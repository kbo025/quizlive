'use strict'

const {
    Teacher
} = require('../models');

const index = async (req, res, next) => {
    try {
        let page = req.query.page || 1; 
        const resp = await Teacher.getAll(page);
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message});
    }
}

const view = async (req, res, next) => {
    try {
        const id = req.params.id;
        const resp = await Teacher.getOne(id);
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const create = async (req, res, next) => {
    try {
        const data = req.body;
        const resp = await Teacher.create(data);
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const resp = await Teacher.update(id, data);
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }    
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id;
        const resp = Teacher.remove(id);
        await res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

module.exports = {
    nameResourse: 'teacher',
    index,
    view,
    create,
    update,
    remove
}