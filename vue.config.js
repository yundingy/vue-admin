const path = require('path')
const webpack = require('webpack')
const globalVars = require('./src/css/var.js')
const CompressionPlugin = require('compression-webpack-plugin')

const basePath = {
  dev: '/',
  pro: '/'
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? basePath.dev : basePath.pro,
  productionSourceMap: process.env.NODE_ENV === 'development',
  pages: {
    index: {
      entry: 'src/app.js',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  css: {
    loaderOptions: {
      less: {
        globalVars
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        'model': path.resolve(__dirname, 'src/js/model/'),
        'js': path.resolve(__dirname, 'src/js/'),
        'components': path.resolve(__dirname, 'src/components/'),
        'views': path.resolve(__dirname, 'src/views/')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        Utils: [path.resolve(__dirname, 'src/js/common/utils'), 'default'],
        Manba: 'manba',
        HeyUI: 'heyui',
        Model: 'js-model',
        G: 'hey-global',
        log: 'hey-log',
        R: [path.resolve(__dirname, 'src/js/common/request'), 'default']
      }),
      new CompressionPlugin({
        test: /\.js$|\.html$|.\css$|/, // 匹配文件名
        threshold: 1024, // 对超过10k的数据压缩
        deleteOriginalAssets: false // 不删除源文件
      })
    ]
  },
  devServer: {
    port: 9528
    // proxy: {
    // 此处应该配置为开发服务器的后台地址
    // 配置文档： https://cli.vuejs.org/zh/config/#devserver-proxy
    // '/api': {
    //   target: 'http://xxx.xx.xx'
    // }
    // }
  }
}
