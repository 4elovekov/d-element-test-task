const nested = require("postcss-nested")
const autoprefixer = require("autoprefixer")
const postCssPresetEnv = require("postcss-preset-env")
const customMedia = require("postcss-custom-media")

module.exports = {
    plugins: [
        nested(),
        autoprefixer(),
        postCssPresetEnv(),
        customMedia({}),
    ]
}