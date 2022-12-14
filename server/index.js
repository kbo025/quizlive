'use strict';

require("dotenv").config({ path: '../.env' });
const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');
const RoonMiddleware = require('./middleware/RoomMiddleware');
const AuthMiddleware = require('./middleware/AuthMiddleware');
const AuthTeacherMiddleware = require('./middleware/AuthTeacherMiddleware');
const AuthStudentMiddleware = require('./middleware/AuthStudentMiddleware');

const {
    Room, Teacher, Student, Question, Option, Answer
} = require('./controllers');

const PORT = process.env.SERVER_PORT || 3000;

const CLIENT_BASE_URL = process.env.CLIENT_BASE_URL || '';
const CLIENT_PORT = process.env.CLIENT_PORT ? `:${process.env.CLIENT_PORT}` : '';
const clientUrl = CLIENT_BASE_URL + CLIENT_PORT;

const server = restify.createServer({
    name: 'quizlive',
    version: '1.0.0',
});
const cors = corsMiddleware({
    origins: [clientUrl],
    allowHeaders: ['X-App-Version', 'authorization'],
    credentials: true,
    exposeHeaders: []
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser({ mapParams: true }));
server.use(restify.plugins.bodyParser({ mapParams: true }));
server.pre(cors.preflight);
server.use(cors.actual);

server.get('/api/hello', (req, resp, next) => {
    resp.json({msj: 'Hello Word...!!!'});
});

// server.get(`/api/${Room.nameResourse}`, Room.index);
server.get(
    `/api/${Room.nameResourse}/:codeRoom`,
    RoonMiddleware, AuthMiddleware,
    Room.view
);
server.post(
    `/api/${Room.nameResourse}`,
    Room.create
);
server.put(`/api/${Room.nameResourse}/:codeRoom`, Room.update);
// server.del(`/api/${Room.nameResourse}/:codeRoom`, Room.remove);

// server.get(`/api/${Room.nameResourse}/:codeRoom/${Teacher.nameResourse}`, Teacher.index);
// server.get(`/api/${Room.nameResourse}/:codeRoom${Teacher.nameResourse}/:code`, Teacher.view);
// server.post(`/api/${Room.nameResourse}/:codeRoom${Teacher.nameResourse}`, Teacher.create);
// server.put(`/api/${Room.nameResourse}/:codeRoom${Teacher.nameResourse}/:code`, Teacher.update);
// server.del(`/api/${Room.nameResourse}/:codeRoom${Teacher.nameResourse}/:code`, Teacher.remove);

server.get(
    `/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}`,
    RoonMiddleware, AuthMiddleware, AuthTeacherMiddleware,
    Student.index
);
// server.get(
//     `/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:code`,
//     RoonMiddleware,
//     Student.view
// );
server.post(
    `/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}`,
    RoonMiddleware,
    Student.create
);
// server.put(
//     `/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:code`,
//     RoonMiddleware,
//     Student.update
// );
// server.del(
//     `/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:code`,
//     RoonMiddleware,
//     Student.remove
// );

//server.get(`/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:codeStudent/${Answer.nameResourse}`, Answer.index);
// server.get(`/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:codeStudent/${Answer.nameResourse}/:code`, Answer.view);
server.post(
    `/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:codeStudent/${Answer.nameResourse}`,
    RoonMiddleware, AuthMiddleware, AuthStudentMiddleware,
    Answer.create
);
// server.put(`/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:codeStudent/${Answer.nameResourse}/:code`, Answer.update);
// server.del(`/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:codeStudent/${Answer.nameResourse}/:code`, Answer.remove);

// server.get(
//     `/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}`,
//     RoonMiddleware,
//     AuthTeacherMiddleware,
//     Question.index
// );
// server.get(
//     `/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:code`,
//     RoonMiddleware,
//     AuthTeacherMiddleware,
//     Question.view
// );
server.post(
    `/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}`,
    RoonMiddleware, AuthMiddleware, AuthTeacherMiddleware,
    Question.create
);
// server.put(
//     `/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:code`,
//     RoonMiddleware,
//     AuthTeacherMiddleware,
//     Question.update
// );
// server.del(
//     `/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:code`,
//     RoonMiddleware,
//     AuthTeacherMiddleware,
//     Question.remove
// );

// server.get(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:codeQuestion/${Option.nameResourse}`, Option.index);
// server.get(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:codeQuestion/${Option.nameResourse}/:code`, Option.view);
// server.post(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:codeQuestion/${Option.nameResourse}`, Option.create);
// server.put(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:codeQuestion/${Option.nameResourse}/:code`, Option.update);
// server.del(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:codeQuestion/${Option.nameResourse}/:code`, Option.remove);

server.listen(PORT, () => { console.log(`API listen on ${PORT}`) });