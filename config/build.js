module.exports = (config) => {
  // 压缩图片
  config.module
    .rule('images')
    .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    .use('image-webpack-loader')
    .loader('image-webpack-loader')
    .options({ bypassOnDebug: true })

  // webpack 会默认给commonChunk打进chunk-vendors，所以需要对webpack的配置进行delete
  config.optimization.delete('splitChunks')

  config
    .plugin('webpack-bundle-analyzer')
    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
}
