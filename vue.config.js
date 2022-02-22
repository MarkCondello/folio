module.exports = {
  chainWebpack: config => {
    config.module
      .rule('pdf')
      .test(/\.(pdf)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'src/downloads/[name].[hash:8].[ext]'
      })
  }
}
