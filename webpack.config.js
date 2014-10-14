module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css.*/, loader: "style!css" },
      { test: /\.woff.*/, loader: "url-loader?mimetype=application/x-font-woff" },
      { test: /\.eot.*/, loader: "url-loader?mimetype=application/x-font-eot" },
      { test: /\.ttf.*/, loader: "url-loader?mimetype=application/x-font-ttf" },
      { test: /\.png.*/, loader: "url-loader?mimetype=image/png" },
      { test: /\.svg.*/, loader: "url-loader?mimetype=image/svg" }
    ],
  }
};
