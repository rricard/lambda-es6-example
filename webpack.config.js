var path = require("path");

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: ['syntax-flow', 'transform-flow-strip-types']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};
