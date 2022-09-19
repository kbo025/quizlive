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
    },
    statement: {
        type: 'string',
    },
    value: {
        type: 'number',
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