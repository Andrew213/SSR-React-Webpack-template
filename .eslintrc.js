module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],

    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: false,
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
    },
    plugins: ["@typescript-eslint", "import", "react", "react-hooks"],
    rules: {
        // TypeScript
        "@typescript-eslint/no-angle-bracket-type-assertion": 0,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/no-unnecessary-type-assertion": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-misused-promises": 0,
        "@typescript-eslint/no-this-alias": 0,
        "@typescript-eslint/unbound-method": 0,
        "@typescript-eslint/await-thenable": 0,
        "@typescript-eslint/prefer-regexp-exec": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/ban-ts-ignore": 0,
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                vars: "all",
                args: "all",
                varsIgnorePattern: "^_",
                argsIgnorePattern: "^_",
                ignoreRestSiblings: true,
            },
        ],
    },
};
