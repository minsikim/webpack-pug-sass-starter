module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: __dirname + '/public'
  },
  mode: 'development',
}