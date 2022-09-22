'use strict'

const {
    Question,
    Option,
    Student,
    Answer
} = require('../models');

const index = async (req, res, next) => {
    try {
        let page = req.query.page || 1; 
        const answers = await Answer.getAll(page);
        const resp = await answers.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message});
    }
}

const view = async (req, res, next) => {
    try {
        const id = req.params.id;
        const answer = await Answer.getOne(id);
        const resp = await answer.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }
}

const create = async (req, res, next) => {
    try {
        const { questionCode, optionCode } = req.body;
        const question = await Question.getOne(questionCode);
        const option = await Option.getOne(optionCode);
        const student =  await Student.getOne(req.params.codeStudent);
        const rigth = option.get('rigth_answer');
        const xp = question.get('xp');
        const answer = await Answer.create({
            code: question.get('code'),
            option: option.get('code'),
            rigth,
            xp: rigth ? xp : 0
        });
        await student.relateTo(answer, 'answers');
        await Student.update( student.get('code'), { xp: student.get('xp') + (rigth ? xp : 0) });
        const resp = await answer.toJson();
        res.json(resp);
    } catch (e) {
        console.log(e);
        res.json(500, { success: false, message: e.message });
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const answer = await Answer.update(id, data);
        const resp = answer.toJson();
        res.json(resp);
    } catch (e) {
        res.json(500, { success: false, message: e.message });
    }    
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id;
        const success = await Answer.remove(id);
        res.json({ success });
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