const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = webpackMerge(baseConfig, {
    plugins: [
        new UglifyJsPlugin()
    ]
})