const path = require('path');

// File loaded by new vue-cli services
module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL,
  outputDir: 'dist',
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          options: {
            symbolId: 'icon-[name]'
          }
        }
      ]
    },
    resolve: {
      alias: {
        api: path.resolve(__dirname, 'src/api')
      }
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .test(() => false)
      .use('file-loader');
  }
};