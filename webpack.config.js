var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
      main: ['./src/index.js', './style/main.scss']
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-1']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: '[name].css',
      allChunks: true
    }),
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.scss']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
