const path = require("path");

module.exports = env => {
  console.log(env);
  return {
    mode: "development",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "webpack-numbers.js",
      library: {
        name: "webpackNumbers",
        type: "umd",
      },
    },
    resolve: {
      modules: ["/data/data/com.termux/files/usr/lib/node_modules"]
    },
    resolveLoader: {
      modules: ["/data/data/com.termux/files/usr/lib/node_modules"]
    },
    externals: {
      lodash: {
        commonjs: "lodash",
        commonjs2: "lodash",
        amd: "lodash",
        root: "_",
      },
    },
  };
};
