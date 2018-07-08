
var path = require("path");

var config = {
  
  entry: ["./index.tsx"],
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use:"ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;