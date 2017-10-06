let plugins = require('./rollup.plugins')

export default {
  input: 'src/livestream-host.js',
  output: {
    file: 'public/host/bundle.js',
    format: 'iife'
  },
  plugins
}
