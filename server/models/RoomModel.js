'use strict';

const instance = require('../config/db');

const resourceName = 'Room';
const rowsForPage = 25;

const getOne = async (code) => {
    return await instance.first(resourceName, 'code', code);
}

const getQuestions = async (code) => {
    const query = `MATCH (r:Room)-[:IS_QUESTION]-(Questions) WHERE r.code = $code RETURN Questions`;
    return await instance.cypher(query, { code });
} 

const getStudents = async (code) => {
    const query = `MATCH (r:Room)-[:IS_STUDENT]-(Students) WHERE r.code = $code RETURN Students`;
    return await instance.cypher(query, { code });
} 

const getAll = async (page) => {
    const offset = page ? (page * rowsForPage) - rowsForPage : 0;
    const collection = await instance.all(resourceName, {}, {createdAt: 'DESC'}, rowsForPage, offset);
    return await collection.toJson();
}

const create = async (data) => {
    return await instance.create(resourceName, data);
}

const createWithTeacher = async (dataRoom, dataTeacher) => {
    const room = await instance.create(resourceName, dataRoom);
    const teacher = await instance.create('Teacher', dataTeacher);
    await room.relateTo(teacher, 'teacher');
    return { room, teacher };
}

const update = async (code, data) => {
    let room = await instance.first(resourceName, 'code', code);
    await room.update(data);
    return room;
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
    remove,
    createWithTeacher,
    getQuestions,
    getStudents
}