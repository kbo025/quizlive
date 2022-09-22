'use strict'
require("dotenv").config({ path: '../.env' });
const {
    Room
} = require('../models');
const Utils = require('../services/Utils');

const index = async (req, res, next) => {
    try {
        let page = req.query.page || 1; 
        const room = await Room.getAll(page);
        const resp = await room.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message});
    }
}

const view = async (req, res, next) => {
    try {
        const id = req.params.id;
        const room = await Room.getOne(id);
        const resp = await room.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const create = async (req, res, next) => {
    try {
        const { name, classroom } = req.body;
        const codeRoom = Utils.codeGenerator('R', 5);
        const baseUrl = process.env.CLIENT_BASE_URL || '';
        const { room, teacher } = await Room.createWithTeacher(
            { name: classroom, code: codeRoom, url: `${baseUrl}/invite/${codeRoom}` },
            { name, code: Utils.codeGenerator('T', 5) }
        );

        const resp = await room.toJson();
        resp.teacher = await teacher.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const room = await Room.update(id, data);
        const resp = await room.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }    
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id;
        const success = await Room.remove(id);
        res.json({ success });
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