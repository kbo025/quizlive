'use strict';

const restify = require('restify');
require("dotenv").config({ path: '../.env' });
const {
    Room
} = require('./controllers');

const PORT = process.env.PORT || 3000;
const server = restify.createServer({
    name: 'qualitest',
    version: '1.0.0',
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser({ mapParams: true }));
server.use(restify.plugins.bodyParser({ mapParams: true }));

server.get('/api/hello', (req, resp, next) => {
    resp.json({msj: 'Hello Word...!!!'});
});
server.get(`/api/${Room.nameResourse}`, Room.index);
server.get(`/api/${Room.nameResourse}/:id`, Room.view);
server.post(`/api/${Room.nameResourse}`, Room.create);
server.put(`/api/${Room.nameResourse}/:id`, Room.update);
server.del(`/api/${Room.nameResourse}/:id`, Room.remove);

server.listen(PORT, () => { console.log(`API listen on ${PORT}`) });