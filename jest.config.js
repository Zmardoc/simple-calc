module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue', 'jsx'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vuetify/lib$': 'vuetify',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: [
    '**/src/components/**/*.spec.(js)',
    '**/src/components/*.spec.(js)',
    '**/src/store/**/*.spec.(js)',
    '**/tests/unit/**/*.spec.(js)|**/__tests__/*.(js)',
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
  testURL: 'http://localhost/',
  transformIgnorePatterns: ['/node_modules/'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  globalSetup: './globalSetup.js',
}
