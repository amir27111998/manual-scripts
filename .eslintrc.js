module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'check-file', 'import'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  env: {
    commonjs: true,
  },
  ignorePatterns: ['*.eslintrc.js'],
  rules: {
    '@typescript-eslint/no-continue': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['enum', 'enumMember'],
        format: ['PascalCase'],
      },
      {
        selector: ['function', 'variable', 'method'],
        format: ['camelCase'],
      },
    ],
    'no-console': 'error',
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'error',
    'check-file/filename-naming-convention': [
      'error',
      {
        '**/(index|types|constants).{js,ts}': 'FLAT_CASE',
        '**/{!(index|types|constants),}.{js,ts}': 'PASCAL_CASE',
      },
      {
        ignoreMiddleExtensions: true,
      },
    ],
    'check-file/folder-naming-convention': [
      'error',
      {
        '**/*': 'KEBAB_CASE',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: true,
        peerDependencies: true,
        devDependencies: true,
      },
    ],
  },
};
