var webpack = require("webpack");

module.exports = {
    entry: [
        './public/scripts/app/app.vendor.ts',
        './public/scripts/app/app.main.ts'
    ],
    output: {
        path: './public/scripts',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.css']
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.(png|jpg|gif)$/, loader: "url-loader", },
            { test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader", },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
    ],
}