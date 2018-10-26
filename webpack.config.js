const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const offlinePlugin = require("offline-plugin");

const dev = process.env.NODE_ENV !== "production";

const DefinePluginConfig = new webpack.DefinePlugin({
  "process.env.NODE_ENV": JSON.stringify("production")
});

const offlinePluginConfig = new offlinePlugin({
  safeToUseOptionalCaches: true,
  externals: ["assets/**", "favicon.ico", "/"],
  publicPath: "/",
  caches: "all",

  ServiceWorker: {
    publicPath: "/sw.js",
    events: true,
    navigateFallbackURL: "/"
  },
  AppCache: {
    events: true
  }
});

const hotReloadMiddlewares = [
  "react-hot-loader/patch",
  "webpack-hot-middleware/client"
];

const clientConfig = {
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      app: path.resolve(__dirname, "src/client/app/"),
      assets: path.resolve(__dirname, "src/client/assets/")
    }
  },
  cache: true,
  stats: dev ? "normal" : "errors-only",
  entry: dev
    ? ["isomorphic-fetch", ...hotReloadMiddlewares, "./src/client/index.tsx"]
    : ["isomorphic-fetch", "./src/client/index.tsx"],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/public"),
    publicPath: dev ? "http://localhost:3000/public/" : "/"
  },
  mode: dev ? "development" : "production",
  plugins: dev
    ? [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
      ]
    : [DefinePluginConfig, offlinePluginConfig]
};

const serverConfig = {
  entry: path.join(__dirname, "src/server/index.js"),
  target: "node",
  externals: [nodeExternals()],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      app: path.resolve(__dirname, "src/client/app/"),
      assets: path.resolve(__dirname, "src/client/assets/")
    }
  },
  stats: dev ? "normal" : "errors-only",
  output: {
    path: __dirname,
    filename: "server.js",
    publicPath: "/"
  },
  mode: dev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ]
  }
};

module.exports = [clientConfig, serverConfig];
