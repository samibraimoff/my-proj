module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next"
    ],
    "rules": {
        indent: [2,2],
        'react/jsx-indent': [2,2],
        'react/jsx-indent-props': [2,2],
        'react/jsx-filename-extension': [2, {'extensions': ['.js', '.jsx', '.tsx']}],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'react/no-deprecated': 'off',
        'react/strict-boolean-expressions': 'off',
        '@typescript-eslint/strict-boolean-expressions':'off',
        'i18next/no-literal-string': [2, {markupOnly: true}],
        'max-len': [2, 120, 4, {"ignoreComments": true, "ignoreUrls": true}]
    },
    globals: {
        IS_DEV: true
    }
}
