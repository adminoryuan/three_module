const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.js', // 入口文件
  mode: 'development', // 或 'production'
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.resolve(__dirname, 'dist'), // 输出目录
  },
  module: {
    rules: [
      
      {
        test: /\.(gltf|glb)$/,
        use: 'file-loader', // 使用file-loader来加载GLTF模型文件
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'), // 静态资源根目录
    port: 8080, // 服务器端口
    historyApiFallback: {
      index: 'main.html', // 设置默认页面
    },
  },
  plugins: [
    // new CopyPlugin({
    //   patterns: [
    //     { from: 'static', to: 'static' }, // 将static文件夹中的内容复制到dist目录下的static文件夹中
    //   ],
    // }),
  ],

};
