module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },

    "plugins": ["react"],

    "parserOptions": {
        "ecmaFeatures": {
            "arrowFunctions": true,
            "binaryLiterals": true,
            "blockBindings": true,
            "classes": true,
            "defaultParams": true,
            "destructuring": true,
            "forOf": true,
            "generators": true,
            "modules": true,
            "objectLiteralComputedProperties": true,
            "objectLiteralDuplicateProperties": true,
            "objectLiteralShorthandMethods": true,
            "objectLiteralShorthandProperties": true,
            "octalLiterals": true,
            "regexUFlag": true,
            "regexYFlag": true,
            "spread": true,
            "superInFunctions": true,
            "templateStrings": true,
            "unicodeCodePointEscapes": true,
            "globalReturn": true,
            "jsx": true
        }
    },

    "globals": {
        "__API_URL__": false,
        "__WEBSOCKET_URL__": false,
        "__LOGIN_URL__": false,
        "APP_VERSION": false
    },

    "rules": {

        //
        //Possible Errors
        //
        // The following rules point out areas where you might have made mistakes.
        //
        "no-cond-assign": 2, // disallow assignment in conditional expressions
        "no-constant-condition": 2, // disallow use of constant expressions in conditions
        "no-console": [1, { allow: ["error"] }], // disallow use of console (off by default in the node environment)
        "no-control-regex": 2, // disallow control characters in regular expressions
        "no-debugger": 2, // disallow use of debugger
        "no-dupe-args": 2, // disallow duplicate arguments in functions
        "no-dupe-keys": 2, // disallow duplicate keys when creating object literals
        "no-duplicate-case": 2, // disallow a duplicate case label.
        "no-empty-character-class": 2, // disallow the use of empty character classes in regular expressions
        "no-ex-assign": 2, // disallow assigning to the exception in a catch block
        "no-extra-boolean-cast": 2, // disallow double-negation boolean casts in a boolean context
        "no-extra-semi": 2, // disallow unnecessary semicolons
        "no-func-assign": 2, // disallow overwriting functions written as function declarations
        "no-inner-declarations": 2, // disallow function or variable declarations in nested blocks
        "no-invalid-regexp": 2, // disallow invalid regular expression strings in the RegExp constructor
        "no-irregular-whitespace": 2, // disallow irregular whitespace outside of strings and comments
        "no-negated-in-lhs": 2, // disallow negation of the left operand of an in expression
        "no-obj-calls": 2, // disallow the use of object properties of the global object (Math and JSON) as functions
        "no-regex-spaces": 2, // disallow multiple spaces in a regular expression literal
        "no-sparse-arrays": 2, // disallow sparse arrays
        "no-unreachable": 2, // disallow unreachable statements after a return, throw, continue, or break statement
        "use-isnan": 2, // disallow comparisons with the value NaN
        "valid-typeof": 2, // Ensure that the results of typeof are compared against a valid string

        //
        // Best Practices
        //
        // These are rules designed to prevent you from making mistakes.
        // They either prescribe a better way of doing something or help you avoid footguns.
        //
        "eqeqeq": 2, // require the use of === and !==
        "no-eval": 2, // disallow use of eval()
        "no-extend-native": 2, // disallow adding to native types
        "no-extra-bind": 2, // disallow unnecessary function binding
        "no-fallthrough": 2, // disallow fallthrough of case statements
        "no-implied-eval": 2, // disallow use of eval()-like methods
        "no-iterator": 2, // disallow usage of __iterator__ property
        "no-labels": 2, // disallow use of labeled statements
        "no-lone-blocks": 2, // disallow unnecessary nested blocks
        "no-multi-str": 2, // disallow use of multiline strings
        "no-native-reassign": 2, // disallow reassignments of native objects
        "no-new": 2, // disallow use of new operator when not part of the assignment or comparison
        "no-new-func": 2, // disallow use of new operator for Function object
        "no-new-wrappers": 2, // disallows creating new instances of String,Number, and Boolean
        "no-octal": 2, // disallow use of octal literals
        "no-octal-escape": 2, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
        "no-process-env": 2, // disallow use of process.env (off by default)
        "no-proto": 2, // disallow usage of __proto__ property
        "no-script-url": 2, // disallow use of javascript: urls.
        "no-self-compare": 2, // disallow comparisons where both sides are exactly the same (off by default)
        "no-sequences": 2, // disallow use of comma operator
        "no-void": 2, // disallow use of void operator (off by default)
        "no-with": 2, // disallow use of the with statement
        "wrap-iife": 2, // require immediate function invocation to be wrapped in parentheses (off by default)
        "yoda": 2, // require or disallow Yoda conditions

        //
        // Variables
        //
        // These rules have to do with variable declarations.
        //
        "no-catch-shadow": 2, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
        "no-delete-var": 2, // disallow deletion of variables
        "no-label-var": 2, // disallow labels that share a name with a variable
        "no-undef": 2, // disallow use of undeclared variables unless mentioned in a /*global */ block
        "no-undef-init": 2, // disallow use of undefined when initializing variables
        "no-undefined": 2, // disallow use of undefined variable (off by default)
        "no-unused-vars": 1, // disallow declaration of variables that are not used in the code

        //
        // ECMAScript 6
        //
        // These rules are only relevant to ES6 environments and are off by default.
        //
        "no-var": 1, // require let or const instead of var (off by default)

        //
        // eslint-plugin-react
        //
        // React specific linting rules for ESLint
        //
        "react/jsx-no-undef": 2, // Disallow undeclared variables in JSX
        "react/jsx-uses-react": 2, // Prevent React to be incorrectly marked as unused
        "react/jsx-uses-vars": 2, // Prevent variables used in JSX to be incorrectly marked as unused
        "react/no-did-mount-set-state": 2, // Prevent usage of setState in componentDidMount
        "react/no-did-update-set-state": 2, // Prevent usage of setState in componentDidUpdate
        "react/no-unknown-property": 2, // Prevent usage of unknown DOM property
        "react/react-in-jsx-scope": 2, // Prevent missing React when using JSX
    }
}