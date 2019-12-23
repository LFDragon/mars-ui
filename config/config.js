export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true
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
        ]
    }],
};