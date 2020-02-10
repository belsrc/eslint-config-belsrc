module.exports = {
  // eslint-plugin-simple-import-sort
  // https://github.com/lydell/eslint-plugin-simple-import-sort
  'simple-import-sort/sort': [2, {
    groups: [
      [
        // Side effect imports.
        '^\\u0000',
        // Style imports.
        '^.+\\.s?css$',
      ],
      [
        // Node.js builtins. You could also generate this regex if you use a `.js` config.
        '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
        // Packages. `react`, vue, vuex related packages come first.
        '^react', 'vue', 'vuex', '^@?\\w',
        // Internal packages.
        '^(blocks|elements|pages|sections|data|functions|store|router|components|core)(/.*|$)',
        // Parent imports. Put `..` last.
        '^\\.\\.(?!/?$)', '^\\.\\./?$',
        // Other relative imports. Put same-folder imports and `.` last.
        '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$',
      ]
    ]
  }],
  // These need to be off to function correctly
  'sort-imports': 0,
  'import/order': 0,
};
