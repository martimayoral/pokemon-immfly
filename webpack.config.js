const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const cssRule = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}

const jsRule = {
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-react', {
          runtime: 'automatic'
        }
      ]
    ]
  }
}

const rules = [jsRule, cssRule]

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'

  return {
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js', // to have a different build every time
      path: path.resolve(__dirname, 'build') // to output build in /build
    },

    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: { rules },
    plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' }) // to create HTML file automatically
    ],
    devServer: {
      open: true // to open automatically
    },
    devtool: 'source-map' // to debug in web console
  }
}
