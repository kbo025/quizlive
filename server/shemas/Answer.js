/**
 * Answer Definition
 */
 module.exports = {
    answer_id: {
        type: 'uuid',
        primary: true,
    },
    code: {
        type: 'string',
        index: true,
        required: true,
    },
    rigth: {
        type: 'boolean',
        required: true,
        default: false,
    },
    option: {
        type: 'string',
        required: true,
    },
    xp: {
        type: 'number',
        required: true,
    },
    createdAt: {
        type: 'datetime',
        default: () => new Date,
    }
};