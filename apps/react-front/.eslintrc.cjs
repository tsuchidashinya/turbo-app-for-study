module.exports = {
  root: true,
  extends: ['@packages/eslint-config/react.js'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
}
