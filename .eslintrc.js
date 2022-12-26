module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es13: true,
    jest: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
  ],
  parserOptions: {
    babelOptions: {
      presets: [ '@babel/preset-react' ],
    },
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: [
    'import',
  ],
  root: true,
  rules: {
    quotes: [ 'error', 'single', { avoidEscape: true, allowTemplateLiterals: true } ],
    semi: [ 'error', 'always' ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-var': 'error',
    'no-trailing-spaces': 'error',
    'arrow-spacing': 'error',
    'prefer-const': 'error',
    'arrow-parens': [ 'error', 'as-needed' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'max-len': [ 'error', { code: 120 } ],
    'no-console': [ 'error', { allow: [ 'log', 'warn', 'error' ] } ],
    'no-unused-vars': 'error',
    'no-undef': 'error',
    'no-duplicate-imports': 'error',
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};