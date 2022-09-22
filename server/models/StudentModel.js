'use strict';

const instance = require('../config/db');

const resourceName = 'Student';
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
    let option = await instance.first(resourceName, 'code', code);
    await option.update(data);
    return option;
}

const remove = async (code) => {
    await instance.delete(resourceName, { code });
    return true;
}

const getAnswers = async (code) => {
    const query = `MATCH (s:Student)-[:IS_ANSWER]-(Answers) WHERE s.code = $code RETURN Answers`;
    return await instance.cypher(query, { code });
} 

module.exports = {
    getOne,
    getAll,
    create,
    update,
    remove,
    getAnswers
}