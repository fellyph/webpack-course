const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'iMedia Cursos',
      template: './src/index.html',
      favicon: false,
    }),
  ],
};
