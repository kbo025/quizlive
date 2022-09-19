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
    rigth_answer: {
        type: 'boolean',
        required: true,
        default: false,
    },
    statement: {
        type: 'string',
        required: true,
    },
    value: {
        type: 'number',
        required: true,
    },
    createdAt: {
        type: 'datetime',
        default: () => new Date,
    }
};