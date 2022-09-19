/**
 * Option Definition
 */
module.exports = {
    option_id: {
        type: 'uuid',
        primary: true,
    },
    code: {
        type: 'string',
        index: true,
        required: true,
    },
    statement: {
        type: 'string',
        required: true,
    },
    rigth_answer: {
        type: 'boolean',
        required: true,
    },
    createdAt: {
        type: 'datetime',
        default: () => new Date,
    }
};