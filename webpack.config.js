const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // entry: ['babel-polyfill', './src/main.js'],//项目的入口文件，webpack会从main.js开始，把所有依赖的js都加载打包
  // entry: ['./src/main.js'],//项目的入口文件，webpack会从main.js开始，把所有依赖的js都加载打包
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),//项目的打包文件路径
    // publicPath: 'http://127.0.0.1:3000/',//通过devServer访问路径
    filename: 'build.js'//打包后的文件名
    // filename: '[name].js'//打包后的文件名
  },
  devtool: '#eval-source-map',
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    overlay: true
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
        }
      }
    ]
  }
};


//判断 生产环境打包js
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = false;
  module.exports.mode = 'production';

  module.exports.entry = {
    // vendor: ['vue', 'vue-router', 'axios'],
    vendor: ['vue'],
    main: './src/main.js'
  };

  module.exports.output = {
    path: path.resolve(__dirname, './dist'),//项目的打包文件路径
    publicPath: '/',//通过devServer访问路径
    filename: '[name].js',
    chunkFilename: '[name].js'
  };

  // 压缩、拆分、优化
  module.exports.optimization = {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCssAssetsPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        }
      }
    }
  };

  module.exports.plugins = (module.exports.plugins || []).concat([
    //预留
    new CleanWebpackPlugin(['./dist'], {
      verbose: true
    })
  ]);
}






















