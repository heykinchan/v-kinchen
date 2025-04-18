// server/src/controllers/postController.js
const postService = require('../services/postService');

exports.getAllPosts = async (req, res) => {
  const publishedOnly = req.query.published !== 'false';
  const posts = await postService.getAllPosts(publishedOnly);
  res.json(posts);
};

exports.getPostBySlug = async (req, res) => {
  const { slug } = req.params;
  const post = await postService.getPostBySlug(slug);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  res.json(post);
};

exports.createPost = async (req, res) => {
  // 简单模拟验证 - 在实际项目中应添加真正的身份验证
  if (!req.body.title || !req.body.content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  const post = await postService.createPost(req.body);
  res.status(201).json(post);
};
