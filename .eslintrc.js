module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
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
    ecmaVersion: 2018,
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: [
    'import',
  ],
  root: true,
  rules: {
    quotes: [ 'warn', 'single', { avoidEscape: true, allowTemplateLiterals: true } ],
    semi: [ 'warn', 'always' ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-var': 'warn',
    'no-trailing-spaces': 'warn',
    'arrow-spacing': 'warn',
    'prefer-const': 'warn',
    'arrow-parens': [ 'warn', 'as-needed' ],
    'comma-dangle': [ 'warn', 'always-multiline' ],
    'max-len': [ 'warn', { code: 120 } ],
    'no-console': [ 'warn', { allow: [ 'warn', 'error' ] } ],
    'no-unused-vars': 'warn',
    'no-undef': 'warn',
    'no-duplicate-imports': 'warn',
    'object-curly-spacing': [ 'warn', 'always' ],
    'array-bracket-spacing': [ 'warn', 'always' ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};