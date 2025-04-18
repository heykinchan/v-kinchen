module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['plugin:react/recommended', 'prettier'],
  plugins: ['react'],
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    'no-console': 'warn',
  },
};
