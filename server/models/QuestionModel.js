'use strict';

const instance = require('../config/db');

const resourceName = 'Question';
const rowsForPage = 25;

const getOne = async (code) => {
    return await instance.first(resourceName, 'code', code);
}

const getAll = async (page) => {
    const offset = page ? (page * rowsForPage) - rowsForPage : 0;
    return await instance.all(resourceName, {}, {createdAt: 'DESC'}, rowsForPage, offset);
}

const create = async (data) => {
    return await instance.create(resourceName, data);
}

const update = async (code, data) => {
    let question = await instance.first(resourceName, 'code', code);
    await question.update(data);
    return question;
}

const remove = async (code) => {
    await instance.delete(resourceName, { code });
    return true;
}

module.exports = {
    getOne,
    getAll,
    create,
    update,
    remove
}