module.exports = {
  presets: [
    ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }],
    [
      '@vue/app',
      {
        polyfills: ['es.symbol', 'es.object.assign'],
      },
    ],
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import'],
}
