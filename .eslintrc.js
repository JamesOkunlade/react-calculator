module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      'react/jsx-filename-extension': 0,
      'import/no-named-as-default': 0,
      'no-named-as-default-member': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'react/destructuring-assignment': 0,
      'no-nested-ternary': 0,
      'no-unused-expressions': 0,
      'no-restricted-globals': 0,
    }
};
