const path = require("path")
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
  },

  plugins: [
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: "./src/sw.js",
      swDest: "sw.js"
    })
  ]
}