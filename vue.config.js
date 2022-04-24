const { defineConfig } = require('@vue/cli-service')
const autoprefixer = require('autoprefixer');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  chainWebpack: config => {
    config.module
      .rule('images')
      .test(/\.(jpg|png|gif)$/)
      .set('parser', {
        dataUrlCondition: {
          maxSize: 1
        }
      })
  },
  devServer:{
    proxy:{
      "/api":{
        target: 'http://localhost:8523/',
        changeOrigin: true,
        pathRewrite:{
          "^/api":""
      }
      }
    }
  }
})
