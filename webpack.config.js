var path = require("path");
var fs = require("fs");

module.exports = {
  entry: fs.readdirSync(path.join(__dirname, "./lambdas"))
         .filter(filename => /\.js$/.test(filename))
         .map(filename => {
           var entry = {};
           entry[filename.replace(".js", "")] = path.join(
             __dirname,
             "./lambdas/",
             filename
           );
           return entry;
         })
         .reduce((finalObject, entry) => Object.assign(finalObject, entry), {}),
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
