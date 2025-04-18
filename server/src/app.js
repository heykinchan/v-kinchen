// server/src/app.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// 中间件
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:8000',
  credentials: true
}));

// 路由
app.use('/api', routes);

// 错误处理
app.use(errorHandler);

module.exports = app;
