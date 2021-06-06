const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    polyfills: "./src/polyfills",
    index: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  resolve: {
    modules: ["/data/data/com.termux/files/usr/lib/node_modules"]
  },
  resolveLoader: {
    modules: ["/data/data/com.termux/files/usr/lib/node_modules"]
  },
  module: {
    rules: [
      {
        test: require.resolve("./src/index.js"),
        use: "imports-loader?wrapper=window",
      },
      {
        test: require.resolve("./src/globals.js"),
        use:
          "exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Shimming",
      template: "index.html"
    }),
    new webpack.ProvidePlugin({
      join: ["lodash", "join"],
    }),
  ]
};
