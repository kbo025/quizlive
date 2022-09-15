'use strict';

const path = require('path')
const fs = require('fs')
const basename = path.basename(__filename);

let controllers = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-13) === 'Controller.js');
  })
  .forEach(file => {
    const controller = require(path.join(__dirname, file));

    let index = file.substring(0, file.length - 13);
    controllers[index] = controller;
  });

module.exports = controllers;
