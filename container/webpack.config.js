const HtmlWebpack = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  devServer:{
    port:8080,
  },
  plugins:[
    new HtmlWebpack({
      template:'./public/index.html'
    })
  ]
}