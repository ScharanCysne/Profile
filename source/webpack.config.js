const path = require('path');

module.exports = {
  entry: './frontend/src/index.js',
  output: {
    filename: 'index-bundle.js',
    path: path.resolve(__dirname, './static'),
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", ["@babel/preset-react", {"runtime": "automatic"}]]
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
          test: /\.pdf$/,
          use: {
              loader: 'file-loader',
              options: {
                  name: '[path][name].[ext]',
              },
          },
        }
    ]
  }
};

