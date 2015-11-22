var path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "dist"),
    library: "[name]",
    libraryTarget: "commonjs2",
    filename: "[name].js"
  },
  target: "node",
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
