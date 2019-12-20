import main from '@/components/public/main'

const routes = [
    {
        path:'/',
        redirect:'/home',
        name: '_home',
        component:main,
        meta:{
            title: '首页',
            icon:'el-icon-edit'
        },
        children:[
            {
                path: '/home',
                name: 'home',
                component: resolve => {
                    require(['@/views/single-page/home/home.vue'], resolve)
                },
                meta:{
                    title: '首页首页',
                },
            }
        ]
    },
    {
        path:'/login',
        meta:{
            title: '登录',
            icon:"el-icon-share"
        },
        name: 'login',
        component:main,
        children:[
            {
                path: 'home',
                name: 'login_home',
                component: resolve => {
                    require(['@/views/single-page/home/home.vue'], resolve)
                },
                meta:{
                    title:'登录主页'
                }
            },
            {
                path: 'login',
                name: 'login_login',
                component: resolve => {
                    require(['@/views/login/login.vue'], resolve)
                },
                meta:{
                    title:'登录登录'
                }
            }
        ]
    }
];

export default routes;