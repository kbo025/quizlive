'use strict'

const {
    Teacher
} = require('../models');

const index = async (req, res, next) => {
    try {
        let page = req.query.page || 1; 
        const teacher = await Teacher.getAll(page);
        const resp = await teacher.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message});
    }
}

const view = async (req, res, next) => {
    try {
        const id = req.params.id;
        const teacher = await Teacher.getOne(id);
        const resp = await teacher.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const create = async (req, res, next) => {
    try {
        const data = req.body;
        const teacher = await Teacher.create(data);
        const resp = await teacher.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const teacher = await Teacher.update(id, data);
        const resp = await teacher.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }    
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id;
        const success = Teacher.remove(id);
        await res.json({ success });
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