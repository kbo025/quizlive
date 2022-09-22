'use strict'
require("dotenv").config({ path: '../.env' });
const {
    Room,
    Question,
    Student
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
        const code = req.params.codeRoom;
        const room = await Room.getOne(code);
        const resp = await room.toJson();
        const questions = await Room.getQuestions(code);
        resp.questions = questions.records.map( e => e._fields[0].properties);
        for ( let i = 0; i < resp.questions.length; i++ ) {
            const options = await Question.getOptions(resp.questions[i].code);
            resp.questions[i].options = options.records.map( o => o._fields[0].properties );
        }

        if (req.data.user.role == 'student') {
            const answers = await Student.getAnswers(req.data.user.code);
            resp.questions.forEach(qu => {
                qu.answer = answers.records.map( an => an._fields[0].properties).find( an => an.code == qu.code);
            });
        }

        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const create = async (req, res, next) => {
    try {
        const { name, classroom } = req.body;
        const codeRoom = Utils.codeGenerator('R', 5);
        const CLIENT_BASE_URL = process.env.CLIENT_BASE_URL || '';
        const CLIENT_PORT = process.env.CLIENT_PORT ? `:${process.env.CLIENT_PORT}` : '';
        const baseUrl = CLIENT_BASE_URL + CLIENT_PORT;
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
        const code = req.params.codeRoom;
        const data = req.body;
        const room = await Room.update(code, data);
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