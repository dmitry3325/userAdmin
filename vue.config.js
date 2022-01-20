var path = require('path');

process.env.VUE_APP_VERSION = require('./package.json').version;

const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',

  configureWebpack: {
    devServer: {
      historyApiFallback: true,
    },
    resolve: {
      alias: {
        '@/*': path.resolve(__dirname, '*'),
      },
    },
  },

  pluginOptions: {
    i18n: {
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
});
