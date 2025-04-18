// server/src/index.js
const app = require('./app');
const dotenv = require('dotenv');

// 加载环境变量
dotenv.config({ path: '../../.env' });

const PORT = process.env.SERVER_PORT || 5000;

// eslint-disable-next-line no-console
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
