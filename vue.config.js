const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },

  configureWebpack: config => {
    require('vux-loader').merge(config, {
        options: {},
        plugins: ['vux-ui']
    })
  },
  productionSourceMap: false,//打包时，不生产map文件
  devServer: {
    // proxy: 'http://localhost:3000'
  }
}
