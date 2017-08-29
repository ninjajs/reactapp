const path = require('path');

module.exports = {
  entry: {
    javascript: "./src/index.js"
  },
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"]
    }]
  }
};
