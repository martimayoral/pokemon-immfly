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

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build')
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: { rules }
}