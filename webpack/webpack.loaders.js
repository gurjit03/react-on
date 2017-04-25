var webpack = require('webpack');

module.exports = {
  entry : [
    'script!jquery/dist/jquery.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery : 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin ({
      '$' : 'jquery',
      'jQuery' : 'jquery'
    })
  ],
  output : {
    publicPath: "http://localhost:3000/",
    path : __dirname,
    filename : './public/bundle.js'
  },
  resolve: {
    root : __dirname,
    modulesDirectories : [
      'node_modules',
      './app/**/*'
    ],
    alias : {
      components: 'app/components',
      applicationStyles : 'app/styles/app.scss',
    },
    extensions : ['','.js','.jsx']
  },
  module: {
    loaders: [
      {
        loader : 'babel-loader',
        query : {
          presets: ['react','es2015']
        },
        test : /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          "file-loader?publicPath=public/&outputPage=public/",
          'image-webpack-loader'
        ]
      }
    ]
  },

  devtool: 'cheap-module-eval-source-map'
}
