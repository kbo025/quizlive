/**
 * Teacher Definition
 */
 module.exports = {
    teacher_id: {
        type: 'uuid',
        primary: true,
    },
    code: {
        type: 'string',
        index: true,
        required: true,
    },
    name: {
        type: 'string',
        required: true,
    },
    createdAt: {
        type: 'datetime',
        default: () => new Date,
    }
};