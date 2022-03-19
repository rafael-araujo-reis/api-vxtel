const express = require('express');
const app = express();
const router = express.Router();

const index = require('./routers/index');
const personRouter = require('./routers/personRouter');

app.use('/', index);
app.use('/person', personRouter);
module.exports = app;

