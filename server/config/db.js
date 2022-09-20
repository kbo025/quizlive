'use strict';

const neo4j = require('neo4j-driver').v1;
const Neode = require("neode");
require("dotenv").config({ path: '../.env' });

const instance = Neode.fromEnv();
instance.with({
    Answer: require('../shemas/Answer'),
    Question: require('../shemas/Question'),
    Option: require('../shemas/Option'),
    Room: require('../shemas/Room'),
    Teacher: require('../shemas/Teacher'),
    Student: require('../shemas/Student'),
});

module.exports = instance;