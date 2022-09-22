'use strict'

const {
    Question,
    Option
} = require('../models');
const Utils = require('../services/Utils');


const index = async (req, res, next) => {
    try {
        let page = req.query.page || 1; 
        const question = await Question.getAll(page);
        const resp = await question.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message});
    }
}

const view = async (req, res, next) => {
    try {
        const id = req.params.id;
        const question = await Question.getOne(id);
        const resp = await question.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const create = async (req, res, next) => {
    try {
        const { topic, statement, value, rigthAnswer, options } = req.body;
        const code = Utils.codeGenerator('Q', 5);
        const question = await Question.create({
            code,
            topic,
            statement,
            value,
        });

        options.forEach( async statement => {
            const code = Utils.codeGenerator('O', 5);
            const option = await Option.create({
                code,
                statement,
                rigth_answer: rigthAnswer == statement
            });

            question.relateTo(option, 'options');
        });

        await req.data.room.relateTo(question, 'questions');
        const resp = await question.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const question = await Question.update(id, data);
        const resp = await question.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }    
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id;
        const success = await Question.remove(id);
        res.json({ success });
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