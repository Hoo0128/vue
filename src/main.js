import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Find from './views/Find.vue';
import My from '@/views/My';
import Part from '@/views/Part';
import NotFound from '@/views/NotFound';
import Ranking from '@/views/Second/Ranking';
import Recommend from '@/views/Second/Recommend';
import SongList from '@/views/Second/SongList';
let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);
const routes = [
  { path: '/', redirect: '/find' },
  {
    path: '/find',
    component: Find,
    children: [
      {
        path: 'recommend',
        component: Recommend,
      },
      {
        path: 'ranking',
        component: Ranking,
      },
      {
        path: 'songlist',
        component: SongList,
      },
    ],
  },

  {
    path: '/my',
    component: My,
    name: 'my11',
  },
  {
    path: '/part',
    component: Part,
  },
  {
    path: '*',
    component: NotFound,
  },
];
const router = new VueRouter({
  routes,
  mode: 'history',
});
// 目标: 路由守卫
// 场景: 当你要对路由权限判断时
// 语法: router.beforeEach((to, from, next)=>{//路由跳转"之前"先执行这里, 决定是否跳转})
// 参数1: 要跳转到的路由 (路由对象信息)    目标
// 参数2: 从哪里跳转的路由 (路由对象信息)  来源
// 参数3: 函数体 - next()才会让路由正常的跳转切换, next(false)在原地停留, next("强制修改到另一个路由路径上")
// 注意: 如果不调用next, 页面留在原地

// 例子: 判断用户是否登录, 是否决定去"我的音乐"/my
// const isLogin = true; // 登录状态(未登录)
// router.beforeEach((to, from, next) => {
//   if (to.path !=="/part") {

//     next("/part") // 阻止路由跳转
//   } else {
//     next() // 正常放行
//   }
// })

const islogin = false;
router.beforeEach((to, from, next) => {
  if (to.path == '/my' && !islogin) {
    alert('请登入');
    next(false);
  } else {
    next();
  }
});
Vue.config.productionTip = true;

const vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
console.log(vm);
