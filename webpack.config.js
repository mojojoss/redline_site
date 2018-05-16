const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, './'),
	entry: {
		index: './main.js'
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].bundle.js',
		publicPath: ''
	},
	devServer: {
		contentBase: path.resolve(__dirname, './')
	},

	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},

			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015']
						}
                    }
                ]
            },
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader','sass-loader']
				})
            },

			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				use: [
                    {
                        loader:'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publickPath: 'img/'
                }
                    }
                ]
			},
			{
				test: /\.pug$/,
				use:['html-loader', 'pug-html-loader?{"pretty":true,"exports":false}'],
			},




			]

	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jquery: 'jquery'
		}),
		new HtmlWebpackPlugin({
            filename:'index.html',
			template:'index.pug'
		}),
		new ExtractTextPlugin('styles.css')
	]
};
