const path = require('path')

module.exports = {
  mode: 'development',
  watch: true,
  entry: [
    path.join(__dirname, 'index.js')
  ],
  output: {
    path: path.join(__dirname, 'public/build'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    inline: true
  }
}
