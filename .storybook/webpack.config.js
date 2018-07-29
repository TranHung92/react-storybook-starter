const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, "../src"),
    use: [
      require.resolve("awesome-typescript-loader"),
      require.resolve("react-docgen-typescript-loader")
    ]
  });
  config.plugins.push(new TSDocgenPlugin()); // optional
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};