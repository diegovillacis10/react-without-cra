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
};
