const { mergeConfig } = require('./config/build')
console.log(mergeConfig)
const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const ENV = process.env.NODE_ENV
const production = 'production'
const development = 'development'
const isProduction = process.env.NODE_ENV === production
const publicPath = isProduction ? './' : '/'

module.exports = {
  publicPath, // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制) 在vue-cli.3.3版本后 baseUrl被废除了，因此这边要写成 publicPath。
  outputDir: 'dist', // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  assetsDir: 'static', // 放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
  filenameHashing: true, // 生成的静态资产在文件名中包含散列，以便更好地进行缓存控制
  pages: {
    // pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
    index: {
      // 除了 entry 之外都是可选的
      entry: 'src/main.js', // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 dist/index.html 的输出
      title: 'Index Page', // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
      chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
    }
  },
  lintOnSave: 'error', // 是否在保存的时候检查
  productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
  css: {
    extract: ENV !== development, // 是否使用css分离插件 ExtractTextPlugin 开发环境下默认不开启，与css热重载不兼容 Default：生产环境下是 true ，开发环境下是 false
    sourceMap: false, // 开启 CSS source maps
    loaderOptions: {
      // postcss: {
      //   plugins: [
      //     require('postcss-pxtorem')({ // 把px单位换算成rem单位
      //       rootValue: 37.5, // vant官方使用的是37.5
      //       selectorBlackList: ['vant', 'mu'], // 忽略转换正则匹配项
      //       propList: ['*']
      //     })
      //   ]
      // }
    }, // css预设器配置项
    requireModuleExtension: true // 启用 CSS modules for all css / pre-processor files.
  },
  chainWebpack: config => {
    // 路径别名
    config.resolve.alias.set('@src', resolve('src'))
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
  },
  runtimeCompiler: true, // Runtime + Compiler vs. Runtime only
  // 反向代理
  devServer: {
    // 环境配置
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    open: true, // 配置自动启动浏览器
    proxy: {
      // 配置多个代理(配置一个 proxy: 'http://localhost:4000' )
      '/api': {
        target: 'http://192.168.1.248:9888',
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },

  configureWebpack: config => {
    const plugins = []

    if (isProduction) {
      // 取消webpack警告的性能提示
      config.performance = {
        hints: 'warning',
        // 入口起点的最大体积
        maxEntrypointSize: 1000 * 500,
        // 生成文件的最大体积
        maxAssetSize: 1000 * 1000,
        // 只给出 js 文件的性能提示
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith('.js')
        }
      }

      // 打包时npm包转CDN
      // config.externals = externals;
    }

    return { plugins }
  },
  pluginOptions: {
    // 第三方插件配置
    // ...
  }
}
