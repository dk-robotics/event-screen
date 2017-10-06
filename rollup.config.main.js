let plugins = require('./rollup.plugins')

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife'
  },
  plugins
}
