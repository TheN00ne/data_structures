const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill", "./index.tsx"],

  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },

  mode: "development",

  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], //Треба, щоб імпорти розуміли ts/tsx, бо без цього webpack не розуміє імпорти ts/tsx
    // alias: {}, //Для псевдонімів файлів
  },

  devServer: {
    port: 8000,
    compress: true,
    hot: true,
    watchFiles: ["./**/*"],
    static: {
      directory: path.join(__dirname, "dist"),
    },
    // devMiddleware: {
    //   writeTiDisk: true,
    // },
  },

  context: path.resolve(__dirname, "src"),

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
