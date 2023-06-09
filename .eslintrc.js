/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    env: {
        node: true,
        browser: false,
    },
    overrides: [
        {
            files: ['*.test.ts'],
            env: {
                jest: true,
            },
        },
    ],
}
