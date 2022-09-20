'use strict';

const restify = require('restify');
require("dotenv").config({ path: '../.env' });
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
server.get(`/api/${Room.nameResourse}/:code`, Room.view);
server.post(`/api/${Room.nameResourse}`, Room.create);
server.put(`/api/${Room.nameResourse}/:code`, Room.update);
server.del(`/api/${Room.nameResourse}/:code`, Room.remove);

server.get(`/api/${Room.nameResourse}/:codeRoom/${Teacher.nameResourse}`, Teacher.index);
server.get(`/api/${Room.nameResourse}/:codeRoom${Teacher.nameResourse}/:code`, Teacher.view);
server.post(`/api/${Room.nameResourse}/:codeRoom${Teacher.nameResourse}`, Teacher.create);
server.put(`/api/${Room.nameResourse}/:codeRoom${Teacher.nameResourse}/:code`, Teacher.update);
server.del(`/api/${Room.nameResourse}/:codeRoom${Teacher.nameResourse}/:code`, Teacher.remove);

server.get(`/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}`, Student.index);
server.get(`/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:code`, Student.view);
server.post(`/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}`, Student.create);
server.put(`/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:code`, Student.update);
server.del(`/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:code`, Student.remove);

server.get(`/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:codeStudent/${Answer.nameResourse}`, Answer.index);
server.get(`/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:codeStudent/${Answer.nameResourse}/:code`, Answer.view);
server.post(`/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:codeStudent/${Answer.nameResourse}`, Answer.create);
server.put(`/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:codeStudent/${Answer.nameResourse}/:code`, Answer.update);
server.del(`/api/${Room.nameResourse}/:codeRoom/${Student.nameResourse}/:codeStudent/${Answer.nameResourse}/:code`, Answer.remove);

server.get(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}`, Question.index);
server.get(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:code`, Question.view);
server.post(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}`, Question.create);
server.put(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:code`, Question.update);
server.del(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:code`, Question.remove);

server.get(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:codeQuestion/${Option.nameResourse}`, Option.index);
server.get(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:codeQuestion/${Option.nameResourse}/:code`, Option.view);
server.post(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:codeQuestion/${Option.nameResourse}`, Option.create);
server.put(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:codeQuestion/${Option.nameResourse}/:code`, Option.update);
server.del(`/api/${Room.nameResourse}/:codeRoom/${Question.nameResourse}/:codeQuestion/${Option.nameResourse}/:code`, Option.remove);

server.listen(PORT, () => { console.log(`API listen on ${PORT}`) });