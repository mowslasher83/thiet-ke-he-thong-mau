const path = require('path');

module.exports = {
  // Entry point for the application
  entry: './src/index.js',
  output: {
    // Output filename and path configuration
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      // Rule for processing JavaScript and JSX files
      test: /\.jsx?$/, 
      exclude: /node_modules/, 
      use: {
        loader: 'babel-loader',
        options: {
          // Presets for Babel
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    }],
  },
  resolve: {
    // Resolve .js and .jsx file extensions
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    // Configuration for the development server
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};