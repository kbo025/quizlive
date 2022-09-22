/**
 * Room Definition
 */
 module.exports = {
    room_id: {
        type: 'uuid',
        primary: true,
    },
    code: {
        type: 'string',
        index: true,
        required: true,
    },
    url: {
        type: 'string',
        index: true,
        required: true,
        uri: true,
    },
    name: {
        type: 'string',
        required: true,
    },
    status: {
        type: 'number',
        default: 0,
        valid: [0, 1]
    },
    xp: {
        type: 'number',
        default: 0,
    },
    createdAt: {
        type: 'datetime',
        default: () => new Date,
    },
    teacher: {
        type: "relationship",
        target: "Teacher",
        relationship: "IS_TEACHER",
        direction: "out",
        properties: {},
        eager: true
    },
    students: {
        type: "relationship",
        target: "Student",
        relationship: "IS_STUDENT",
        direction: "out",
        properties: {},
        eager: true
    },
    questions: {
        type: "relationship",
        target: "Question",
        relationship: "IS_QUESTION",
        direction: "out",
        properties: {}
    }
};