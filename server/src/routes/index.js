// server/src/routes/index.js
const express = require('express');
const postsRoutes = require('./posts');

const router = express.Router();

router.use('/posts', postsRoutes);

module.exports = router;
