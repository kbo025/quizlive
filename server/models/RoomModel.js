'use strict';

const getOne = (id) => {
    return { success: true, method: 'getOne', id };
}

const getAll = (page) => {
    return { success: true, method: 'getAll', page };
}

const create = (data) => {
    return { success: true, method: 'create', data };
}

const update = (key, data) => {
    return { success: true, method: 'update', key, data };
}

const remove = (key) => {
    return { success: true, method: 'remove', key };
}

module.exports = {
    getOne,
    getAll,
    create,
    update,
    remove
}