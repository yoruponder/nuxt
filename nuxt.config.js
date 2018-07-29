const webpack = require('webpack')

module.exports = {
    build: {
        filenames: {
            vendor: 'vendor.[hash:5].js',
            app: 'app.[chunkhash:5].js'
        },
        analyze: false,
        loaders: [
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                query: {
                    limit: 8000, // 1KO
                    name: 'img/[name].[hash:5].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 8000, // 1 KO
                    name: 'fonts/[name].[hash:5].[ext]'
                }
            }
        ],
        postcss: [
            require('autoprefixer')({
                browsers: ['last 3 versions']
            })
        ],
        plugins: [
            new webpack.DefinePlugin({
                'process.VERSION': require('./package.json').version
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            })
        ],
        vendor: ['axios'],
        cache: {
            max: 1000,
            maxAge: 900000
        }
    }
}