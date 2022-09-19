'use strict';

const instance = require('../config/db');

const resourceName = 'Answere';
const rowsForPage = 25;

const getOne = async (code) => {
    let result = await instance.first(resourceName, 'code', code);
    const props = result.properties();
    return props;
}

const getAll = async (page) => {
    const offset = page ? (page * rowsForPage) - rowsForPage : 0;
    const collection = await instance.all(resourceName, {}, {createdAt: 'DESC'}, rowsForPage, offset);
    return await collection.toJson();
}

const create = async (data) => {
    const result = await instance.create(resourceName, data);
    const props = result.properties();
    return props;
}

const update = async (code, data) => {
    let result = await instance.first(resourceName, 'code', code);
    await result.update(data);
    const props = result.properties();
    return props;
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