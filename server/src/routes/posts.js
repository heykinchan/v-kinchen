// server/src/routes/posts.js
const express = require('express');
const { getAllPosts, getPostBySlug, createPost } = require('../controllers/postController');
const asyncHandler = require('../utils/asyncHandler');

const router = express.Router();

// 获取所有已发布文章
router.get('/', asyncHandler(getAllPosts));

// 按 slug 获取单篇文章
router.get('/:slug', asyncHandler(getPostBySlug));

// 创建新文章
router.post('/', asyncHandler(createPost));

module.exports = router;
