module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "process": true,
        "describe": true,
        "it": true,
        "__dirname": true
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
    }
};