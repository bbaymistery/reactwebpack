const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.js');


module.exports = (envVars) => {
    const { env } = envVars;
    // passed --env where package json

    const envConfig = require(`./webpack.${env}.js`)
    const config = merge(commonConfig, envConfig);
    return config
}