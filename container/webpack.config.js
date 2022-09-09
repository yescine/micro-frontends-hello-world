const HtmlWebpack = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: "development",
  devServer:{
    port:8080,
  },
  plugins:[
    new ModuleFederationPlugin({
      name:'products',
      filename:"remoteEntry.js",
      remotes:{
        products:"products@http://localhost:8081/remoteEntry.js",
        cart:"cart@http://localhost:8082/remoteEntry.js"

      }
    }),
    new HtmlWebpack({
      template:'./public/index.html'
    })
  ]
}