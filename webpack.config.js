const path = require('path')

module.exports = {
  mode: 'development',
  watch: true,
  entry: [
    path.join(__dirname, 'index.ts')
  ],
  output: {
    path: path.join(__dirname, 'public/build'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  devServer: {
    contentBase: './public',
    inline: true
  }
}
