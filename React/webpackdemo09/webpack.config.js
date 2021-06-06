const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports =  {
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    modules: ["/data/data/com.termux/files/usr/lib/node_modules"]
  },
  resolveLoader: {
    modules: ["/data/data/com.termux/files/usr/lib/node_modules"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Tree Shaking",
    }),
  ],
  mode: "production",
  optimization: {
    usedExports: true,
  },
};
