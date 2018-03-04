module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
    ],
    "parserOptions": {
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: "module"
    },
    "env": {
      "jquery": true,
      "browser": true,
    },
    "rules": {
        "no-console": "off",
        "comma-dangle": "only-multiline",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      }
};
