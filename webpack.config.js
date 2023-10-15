const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

// to load styles
const cssRule = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}

// babel to load react files
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

// to import files - create them inside folder assets/
const filesRule = {
  test: /\.(png|ico)$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'assets'
      }
    }
  ],
  type: 'javascript/auto'
}

const rules = [jsRule, cssRule, filesRule]

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
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        favicon: 'src/assets/favicon.ico'
      }) // to create HTML file automatically
    ],
    devServer: {
      // open: true // to open automatically
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    devtool: 'source-map' // to debug in web console
  }
}
