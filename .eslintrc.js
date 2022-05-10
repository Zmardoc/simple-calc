module.exports = {
  plugins: ['prettier-vue', 'vue', 'vue-webpack-src-import'],
  extends: ['plugin:prettier-vue/recommended', 'plugin:vue/recommended', 'eslint:recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  env: {
    es6: true,
    node: true,
  },
  settings: {
    'prettier-vue': {
      SFCBlocks: {
        template: false,
      },
    },
  },
  rules: {
    'prettier-vue/prettier': 'error',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: false,
      },
    ],
    'vue/html-self-closing': ['error', { html: { void: 'any', normal: 'any', component: 'always' } }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['vue'],
        shouldMatchCase: true,
      },
    ],
    'vue/no-empty-component-block': 'error',
    'vue/no-potential-component-option-typo': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/require-direct-export': 'error',
    'vue/require-name-property': 'error',
    'vue/v-for-delimiter-style': 'error',
    'vue/v-on-event-hyphenation': [
      'error',
      'always',
      {
        autofix: false,
        ignore: [],
      },
    ],
    'vue/attribute-hyphenation': 'error',
    'vue/component-definition-name-casing': 'error',
    'vue/html-closing-bracket-newline': 'error',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-end-tags': 'error',
    'vue/html-indent': 'error',
    'vue/html-quotes': 'error',
    'vue/multiline-html-element-content-newline': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/no-template-shadow': 'error',
    'vue/one-component-per-file': 'error',
    'vue/prop-name-casing': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'vue/v-slot-style': 'error',
    'vue/attributes-order': 'error',
    'vue/component-tags-order': 'error',
    'vue/no-lone-template': 'error',
    'vue/no-multiple-slot-args': 'error',
    'vue/no-v-html': 'error',
    'vue/order-in-components': 'error',
    'vue/this-in-template': 'error',
    'vue/template-curly-spacing': 'error',
    'vue-webpack-src-import/only-src-relative-imports': 'error',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
  },
}
