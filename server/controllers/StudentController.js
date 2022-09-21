'use strict'

const {
    Student
} = require('../models');
const Utils = require('../services/Utils');

const index = async (req, res, next) => {
    try {
        let page = req.query.page || 1; 
        const student = await Student.getAll(page);
        const resp = await student.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message});
    }
}

const view = async (req, res, next) => {
    try {
        const id = req.params.id;
        const student = await Student.getOne(id);
        const resp = await student.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const create = async (req, res, next) => {
    try {
        const { name } = req.body;
        const code = Utils.codeGenerator('S', 5);
        const student = await Student.create({ name, code });
        req.data.room.relateTo(student, 'students');
        const resp = await student.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const student = await Student.update(id, data);
        const resp = await student.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }    
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id;
        const success = await Student.remove(id);
        res.json({ success });
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

module.exports = {
    nameResourse: 'student',
    index,
    view,
    create,
    update,
    remove
}