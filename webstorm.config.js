'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src/'),
      'model': resolve('src/js/model/'),
      'js': resolve('src/js/'),
      'components': resolve('src/components/'),
      'views': resolve('src/views/')
    }
  }
}
