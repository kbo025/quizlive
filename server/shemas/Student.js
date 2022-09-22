/**
 * Student Definition
 */
 module.exports = {
    student_id: {
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
    xp: {
        type: 'number',
        default: 0,
    },
    createdAt: {
        type: 'datetime',
        default: () => new Date,
    },
    answers: {
        type: "relationship",
        target: "Answer",
        relationship: "IS_ANSWER",
        direction: "out",
        properties: {},
        eager: true
    }
};