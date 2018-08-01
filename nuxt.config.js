const webpack = require('webpack')
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    head: {
        title: 'vue-nuxt',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    build: {
        filenames: {
            vendor: 'vendor.[hash:5].js',
            app: 'app.[chunkhash:5].js'
        },
        vendor: ['axios'],
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
        extend(config, { isDev, isClient }) {
            config.resolve.alias['_CFG_'] = resolve('config');
            config.resolve.alias['_ASET_'] = resolve('assets');
            config.resolve.alias['_COMP_'] = resolve('components');
            config.resolve.alias['_PAGE_'] = resolve('pages');
            config.resolve.alias['_PLGN_'] = resolve('plugins');
            config.resolve.alias['_S_'] = resolve('static');
            config.resolve.alias['_STORE_'] = resolve('store');
            // console.log(config)
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
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
    },
    loading: {
        color: 'black',
        failedColor: 'red',
        height: '2px',
        duration: 5000
    },
    plugins: [
        { src: '~plugins/ga.js', ssr: false }
    ]
}