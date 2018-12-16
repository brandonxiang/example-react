const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      { test: /\.css$/, use: 'css-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: true,
      title: 'react',
      inject: true,
      template: './src/index.html', // 模板地址
    }),

  ],
};
