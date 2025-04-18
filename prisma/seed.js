// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // 清除现有数据
  await prisma.post.deleteMany({});

  // 创建样本文章
  const posts = [
    {
      title: '使用 Gatsby 构建现代网站',
      slug: 'building-modern-websites-with-gatsby',
      content: `
# 使用 Gatsby 构建现代网站

Gatsby 是一个基于 React 的静态站点生成器，它使用现代网络技术使网站快速、安全且易于扩展。

## 为什么选择 Gatsby？

- **性能** - Gatsby 预构建页面，提供闪电般的加载速度
- **安全性** - 静态文件减少了安全漏洞
- **开发体验** - React 组件、热重载和出色的插件生态系统

## 入门指南

\`\`\`
npm install -g gatsby-cli
gatsby new my-site
cd my-site
gatsby develop
\`\`\`
      `,
      excerpt: 'Gatsby 是一个基于 React 的静态站点生成器，它使用现代网络技术使网站快速、安全且易于扩展。',
      published: true
    },
    {
      title: 'Prisma：现代数据库工具包',
      slug: 'prisma-modern-database-toolkit',
      content: `
# Prisma：现代数据库工具包

Prisma 是一个现代数据库工具包，可以简化数据库工作流程，同时提高开发人员的工作效率。

## Prisma 的主要特点

- **直观的数据模型** - 简单而强大的模式定义
- **类型安全** - 自动生成的类型化客户端
- **简化的查询** - 比原始 SQL 更具可读性

## 快速示例

\`\`\`javascript
// 使用 Prisma 获取所有用户及其文章
const users = await prisma.user.findMany({
  include: { posts: true }
});
\`\`\`
      `,
      excerpt: 'Prisma 是一个现代数据库工具包，可以简化数据库工作流程，同时提高开发人员的工作效率。',
      published: true
    },
    {
      title: '全栈开发者路线图',
      slug: 'full-stack-developer-roadmap',
      content: `
# 2023年全栈开发者路线图

成为一名全栈开发者需要多种技能和技术。本文将简要概述您在2023年应该掌握的关键技术。

## 前端技术

- React/Vue/Angular
- TypeScript
- CSS 预处理器和框架
- 状态管理

## 后端技术

- Node.js/Express
- 数据库（SQL 和 NoSQL）
- RESTful API 设计
- GraphQL

## DevOps 和部署

- Docker 容器化
- CI/CD 管道
- 云服务（AWS、Azure、GCP）

继续学习，保持好奇心！
      `,
      excerpt: '成为一名全栈开发者需要多种技能和技术。本文将概述您在2023年应该掌握的关键技术。',
      published: true
    }
  ];

  for (const post of posts) {
    await prisma.post.create({ data: post });
  }

  console.log('Seed data created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
