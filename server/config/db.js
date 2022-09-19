'use strict';

const neo4j = require('neo4j-driver').v1;
const Neode = require("neode");
require("dotenv").config({ path: '../.env' });

const instance = Neode.fromEnv();
instance.withDirectory('./shemas');
// instance.with({
//     Room: require('../shemas/Room'),
// });

module.exports = instance;