module.exports = {
    "parser": "babel-eslint",
    // "extends": ["airbnb", "plugin:prettier/recommended"],
    "extends": ["prettier"],
    "parserOptions": {
        "ecmaVersion": 6,//也就是ES6语法支持的意思
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true
        },
    },
    "env": {
        browser: true,
        es6: true,
        node: true
    },
    "rules": {
        'react/prop-types': 0,
        'react/prefer-stateless-function': 0,
        'react/no-array-index-key': 0,
        'no-console': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'react/destructuring-assignment': 0,
    }
}