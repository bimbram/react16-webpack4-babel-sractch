const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // our react entry file
  entry: './src/index.js',

  // where we want our compiled file to go, a bundled file
  output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        // Look the js and jsx files using regular expression
        test: /\.js$/,
        // Exclude the node modules
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
