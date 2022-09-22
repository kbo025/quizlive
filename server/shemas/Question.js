/**
 * Question Definition
 */
 module.exports = {
    question_id: {
        type: 'uuid',
        primary: true,
    },
    code: {
        type: 'string',
        index: true,
        required: true,
    },
    topic: {
        type: 'string',
        required: true,
    },
    statement: {
        type: 'string',
        required: true,
    },
    value: {
        type: 'number',
        default: 0,
    },
    createdAt: {
        type: 'datetime',
        default: () => new Date,
    },
    options: {
        type: "relationship",
        target: "Option",
        relationship: "IS_OPTION",
        direction: "out",
        properties: {},
        eager: true
    }
};