import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'

require('dotenv').config()

let production = process.env.NODE_ENV === 'production'

let plugins = [
  babel(),
  resolve({
    browser: true
  }),
  replace({
    'process.env.NODE_ENV': production ? JSON.stringify('production') : JSON.stringify('development'),
    'process.env.PEERJS_API_KEY': JSON.stringify(process.env.PEERJS_API_KEY),
    'process.env.PEERJS_ID': JSON.stringify(process.env.PEERJS_ID)
  }),
  commonjs()
]

if (production) {
  plugins.push(uglify())
}

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife'
  },
  plugins
}
