module.exports = {
  extends: ['eslint:recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  plugins: ['react', 'import', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-unused-vars': 'off',
    'ordered-imports': 0,
    'react/prop-types': 'off',
    'import/no-named-as-default-member': 0,
    'import/order': [2, { groups: ['external', 'index', 'sibling', 'parent', 'internal', 'builtin'] }],
    'react/jsx-filename-extension': [
      0,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'no-nested-ternary': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'react/no-array-index-key': 0,
    'array-callback-return': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
  },
};
