const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  resolve: {
    modules: ["/data/data/com.termux/files/usr/lib/node_modules"]
  },
  resolveLoader: {
    modules: ["/data/data/com.termux/files/usr/lib/node_modules"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hot Module Replacement",
    }),
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    }, ],
  },
};
