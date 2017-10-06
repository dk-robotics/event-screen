const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const uglify = require('rollup-plugin-uglify')
const replace = require('rollup-plugin-replace')
const commonjs = require('rollup-plugin-commonjs')

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

module.exports = plugins