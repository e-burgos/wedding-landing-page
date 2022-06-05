module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
    // "eslint:recommended",
    // "plugin:react/recommended",
    // "plugin:@typescript-eslint/recommended",
    //'plugin:prettier/recommended',
    //'prettier/prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    //"react/jsx-indent": "error",
    'react/jsx-key': 'error',
    'no-var': 'error',
    'brace-style': 'error',
    'prefer-template': 'error',
    'space-before-blocks': 1,
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'error',
    //"@typescript-eslint/no-unused-vars": ["error"],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
