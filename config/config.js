export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true
        }],
    ],
    routes: [{
        path: '/',
        component: '../layout/BasicLayout',
        routes: [
            {
                path: '/',
                component: './index'
            },
            {
                path: '/report',
                component: './report'
            },
        ]
    }],
    proxy: {
        '/proxy': {
            target: 'http://139.224.70.36:8443',
            changeOrigin: true,
            pathRewrite: { "^/proxy": "" }
        },
    }
};