const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const outputPath = path.resolve(__dirname, "../docs");

const config = {
  output: {
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|dist/,
        use: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [
      ".js",
      ".ts",
      ".jsx",
      ".vue",
      ".css",
      ".less",
      ".scss",
      ".json"
    ]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    tinymce: "tinymce"
  },
  plugins: [new CleanWebpackPlugin()]
};

module.exports = (env, argv) => {
  const HtmlWebpackPluginOptions = {
    script: "development",
    template: "index.html"
  };
  if (argv.mode === "production") {
    HtmlWebpackPluginOptions.script = "production.min";
  }
  config.plugins.push(new HtmlWebpackPlugin(HtmlWebpackPluginOptions));
  return config;
};
