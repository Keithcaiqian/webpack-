const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
module.exports = webpackMerge(baseConfig,{
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000
    }
})