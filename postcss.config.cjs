const OpenProps = require("open-props");
const postcssJitProps = require("postcss-jit-props");
const postcssImport = require("postcss-import");
const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
   plugins: [
      postcssImport(),
      autoprefixer,
      postcssPresetEnv({ stage: 0, features: { "nesting-rules": true } }),
      postcssJitProps(OpenProps),
   ],
};
