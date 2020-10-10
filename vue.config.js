module.exports = {
    devServer: {
        port: '8888',
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {
                    '/api': '/mermaid/v1'
                }
            }
        }
    }
}