'use strict';

require("dotenv").config({ path: '../.env' });
const restify = require('restify');
const RoonMiddleware = require('./middleware/RoomMiddleware');
const AuthTeacherMiddleware = require('./middleware/AuthTeacherMiddleware');
const {
    Room, Teacher, Student, Question, Option, Answer
} = require('./controllers');

const PORT = process.env.PORT || 3000;
const server = restify.createServer({
    name: 'quizlive',
    version: '1.0.0',
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser({ mapParams: true }));
server.use(restify.plugins.bodyParser({ mapParams: true }));

server.get('/api/hello', (req, resp, next) => {
    resp.json({msj: 'Hello Word...!!!'});
});

server.get(`/api/${Room.nameResourse}`, Room.index);
server.get(`/api/${Room.nameResourse}/:codeRoom`, Room.view);
server.post(`/api/${Room.nameResourse}`, Room.create);
server.put(`/api/${Room.nameResourse}/:codeRoom`, Room.update);
server.del(`/api/${Room.nameResourse}/:codeRoom`, Room.remove);

server.get(`/api/${Room.nameResourse}/:codeRoom/${Teacher.nameResourse}`, Teacher.index);
server.get(`/api/${Room.nameResourse}/:codeRoom${Teacher.nameResourse}/:code`, Teacher.view);
server.post(`/api/${Room.nameResourse}/:codeRoom${Teacher.nameResourse}`, Teacher.create);
server.put(`/api/${Room.nameResourse}/:codeRoom${Teacher.nameResourse}/:code`, Teacher.update);
server.del(`/api/${Room.nameResourse}/:codeRoom${Teacher.nameResourse}/:code`, Teacher.remove);

server.get(
    `/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}`,
    RoonMiddleware,
    Student.index
);
server.get(
    `/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:code`,
    RoonMiddleware,
    Student.view
);
server.post(
    `/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}`,
    RoonMiddleware,
    Student.create
);
server.put(
    `/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:code`,
    RoonMiddleware,
    Student.update
);
server.del(
    `/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:code`,
    RoonMiddleware,
    Student.remove
);

server.get(`/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:codeStudent/${Answer.nameResourse}`, Answer.index);
server.get(`/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:codeStudent/${Answer.nameResourse}/:code`, Answer.view);
server.post(`/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:codeStudent/${Answer.nameResourse}`, Answer.create);
server.put(`/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:codeStudent/${Answer.nameResourse}/:code`, Answer.update);
server.del(`/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:codeStudent/${Answer.nameResourse}/:code`, Answer.remove);

server.get(
    `/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}`,
    RoonMiddleware,
    AuthTeacherMiddleware,
    Question.index
);
server.get(
    `/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:code`,
    RoonMiddleware,
    AuthTeacherMiddleware,
    Question.view
);
server.post(
    `/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}`,
    RoonMiddleware,
    AuthTeacherMiddleware,
    Question.create
);
server.put(
    `/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:code`,
    RoonMiddleware,
    AuthTeacherMiddleware,
    Question.update
);
server.del(
    `/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:code`,
    RoonMiddleware,
    AuthTeacherMiddleware,
    Question.remove
);

server.get(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:codeQuestion/${Option.nameResourse}`, Option.index);
server.get(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:codeQuestion/${Option.nameResourse}/:code`, Option.view);
server.post(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:codeQuestion/${Option.nameResourse}`, Option.create);
server.put(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:codeQuestion/${Option.nameResourse}/:code`, Option.update);
server.del(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:codeQuestion/${Option.nameResourse}/:code`, Option.remove);

server.listen(PORT, () => { console.log(`API listen on ${PORT}`) });