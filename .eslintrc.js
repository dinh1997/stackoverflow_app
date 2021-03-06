module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'prettier/react',
        'plugin:prettier/recommended',
        'eslint-config-prettier',
        'plugin:import/errors',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks', 'import', 'unused-imports'],
    rules: {
        camelcase: 'off',
        'import/no-unresolved': 0,
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.jsx', '.tsx'],
            },
        ],
        'react/prop-types': 'off',
        '@typescript-eslint/consistent-type-definitions': ['off'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 0,
        'unused-imports/no-unused-imports-ts': 'error',
        'unused-imports/no-unused-vars-ts': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'func-names': 'off',
        'no-use-before-define': 'off',
        'react/require-default-props': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-param-reassign': 'off',
        'array-callback-return': 'off',
        'react/static-property-placement': 'off',
        'react/prefer-stateless-function': 'off',
        'no-unused-expressions': 'off',
        'react/no-unused-prop-types': 'off',
        'class-methods-use-this': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        'no-return-await': 'off',
        'no-async-promise-executor': 'off',
        'no-shadow': 'off',
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        'import/resolver': {
            typescript: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
}
