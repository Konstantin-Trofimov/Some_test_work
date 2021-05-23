const path                    = require('path')
const HTMLWebpackPlugin       = require('html-webpack-plugin')
const { CleanWebpackPlugin }  = require('clean-webpack-plugin')
const CopyWabpackPlugin       = require('copy-webpack-plugin')
const MiniCssExtractPlugin    = require('mini-css-extract-plugin')
const TerserWebpackPlugin     = require('terser-webpack-plugin')
const CssMinimizerPlugin      = require('css-minimizer-webpack-plugin')


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const PORT = 4200


class SucsessBuildNotification {
	constructor(title, indent) {
		this.msg = {}
		this.indent = indent
		this.msg.title = title.toUpperCase()
		this.makeSep = (gap, ext) => gap.repeat(ext)
		this.charsets = ['\u{00A0}', '\u{1F95A}', '\u{1F423}', '\u{1F425}']
	}
	get message() {
		const [space, ...emoji] = this.charsets
		const sep = this.makeSep(space, this.indent)
		const setSeps = str => sep + str + sep

		this.msg.left = setSeps(emoji.join(sep))
		this.msg.right = setSeps(emoji.reverse(sep).join(sep))

		this.msg.completeStr = function () {
			return `\n${this.left.concat(this.title, this.right)}\n`
		}
		return this.msg.completeStr()
	}
}

const startup = new SucsessBuildNotification('build is completed', 6)
process.on('exit', () => console.log(startup.message));
console.log('IS DEV:', isDev)

const optimization = () => {
	const config = {
		splitChunks: {
			chunks: 'all'	
		}
	}
	if (isProd) {
		config.minimizer = [
			new CssMinimizerPlugin(),	
            new TerserWebpackPlugin()
		]
	}
	return config
}

const filename = (folder, ext) => { 
	return isDev ? `${folder}/[name].${ext}` : `${folder}/[name].[hash].${ext}`
}

const cssLoaders = extra => {
	const loaders = [
		
		'css-loader'
	]
	if (extra) {
		loaders.push(extra)
	}
	return loaders
}

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		main: ['@babel/polyfill', './js/index.js',],
	},
	output: {
		filename: filename('scripts', 'js'),
		path: path.resolve(__dirname, 'dist'),
		publicPath: ''
	},
	resolve: {
		extensions: ['.js', '.json', '.png'],
		alias: {
			'@models': path.resolve(__dirname, 'src/js/models'),
			'@': path.resolve(__dirname, 'src'),
		}
	},
	optimization: optimization(),
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: PORT,
		hot: isDev,
		
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: 'Webpack',
			filename: './index.html',
			template: './index.html',
			minify: {
				collapseWhitespace: isProd
			},
			
		}),
		new CleanWebpackPlugin(),
		new CopyWabpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/assets'),
					to: path.resolve(__dirname, 'dist/assets')
				},

			]
		}),
		new MiniCssExtractPlugin({
			filename: filename('styles', 'css'),
		}),
	],
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../'
						}
					},
				  	{ loader: "css-loader", options: {} },
				  	{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								ident: 'postcss',
								plugins: [
									require('postcss-ms-grid')
					  			]
							}
							
						}
					},
				  	{ loader: "sass-loader", options: {} }
				]
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
				}
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
				}
			},
			{
				test: /\.xml$/,
				use: ['xml-loader']
			},
			{
				test: /\.csv$/,
				use: ['csv-loader']
			},
			{
        		test: /\.m?js$/,
        		exclude: /node_modules/,
        		use: {
          			loader: 'babel-loader',
          			options: {
						presets: [
							'@babel/preset-env'
						],
						plugins: [
							'@babel/plugin-proposal-class-properties'
						]
          			}
        		}
      		}
		]
	}
}

