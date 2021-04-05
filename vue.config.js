module.exports = {
  chainWebpack: config => {
    console.log('...process', process)
    // console.log('...config', config)
    config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  }
}
