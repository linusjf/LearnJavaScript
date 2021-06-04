const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: {
      import: "./src/index.js",
      dependOn: "shared",
    },
    another: {
      import: "./src/another-module.js",
      dependOn: "shared",
    },
    shared: "lodash",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  resolve: {
    modules: ["/data/data/com.termux/files/usr/lib/node_modules"]
  },
  resolveLoader: {
    modules: ["/data/data/com.termux/files/usr/lib/node_modules"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
