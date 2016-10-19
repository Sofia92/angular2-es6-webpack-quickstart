var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");

module.exports = {
  entry: {
<<<<<<< HEAD
    "vendor": "./src/vendor",
    "app": "./src/boot"
=======
    "vendor": "./app/vendor",
    "app": "./app/boot"
>>>>>>> 82f04e67421f8e73e723a18b4e5519e878497250
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts/,
        loaders: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./dist/vendor.bundle.js")
  ]
}