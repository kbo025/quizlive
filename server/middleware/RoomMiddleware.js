'use strict'

const {
    Room
} = require('../models');

module.exports = async (req, res, next) => {
    try {
        const code = req.params.codeRoom;
        const room = await Room.getOne(code);
        if (!room) {
            res.json(400, { success: false, message: 'resource not found!' });
        }
        req.data = { ...req.data, room };
        next();
    } catch (err) {
        res.json(500, { success: false, message: err.message });
    }
};