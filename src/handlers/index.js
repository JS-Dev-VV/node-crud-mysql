const express = require('express');
const handler = express();
const { masterRouter } = require('./master/index')

handler.use('/master', masterRouter);

module.exports.handler = handler;