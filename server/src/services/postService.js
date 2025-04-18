// server/src/services/postService.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const slugify = require('slugify');

exports.getAllPosts = async (publishedOnly = true) => {
  const where = publishedOnly ? { published: true } : {};

  return prisma.post.findMany({
    where,
    orderBy: {
      createdAt: 'desc'
    },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      published: true,
      createdAt: true,
      updatedAt: true
    }
  });
};

exports.getPostBySlug = async (slug) => {
  return prisma.post.findUnique({
    where: { slug }
  });
};

exports.createPost = async (data) => {
  // 如果未提供 slug，则从标题生成
  if (!data.slug) {
    data.slug = slugify(data.title, { lower: true });
  }

  // 如果内容太长，生成摘要
  if (!data.excerpt && data.content) {
    data.excerpt = data.content.substring(0, 150) + '...';
  }

  return prisma.post.create({
    data
  });
};
