'use strict';

module.exports = {
    externals: {
        'react': 'react',
        'react-dom': 'ReactDOM',
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
        ],
    },
    output: {
        library: 'LibraryName',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['', '.js'],
    },
};
