const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// Below configuration is taking entry parameter which will be used
// as starting point for bundling and once done where it needs to be
// put is taken by output parameter

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    // This will create the index.html for you and inject the bundled file
    // when we do build and while running on dev it will create it in-memory
    new HtmlWebpackPlugin({
      // path of the file which can be used as a template
      template: path.resolve(__dirname, "public/index.html"),
      // name of the file which will be created by HtmlWebPackPlugin
      filename: "index.html",
    }),
  ],
};
