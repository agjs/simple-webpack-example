module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'bundle.js',
    path: './build'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  }
}

