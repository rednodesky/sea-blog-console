import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    meta: { title: '首页' },
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/table',
    component: Layout,
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '文章管理', icon: 'table' }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '文章发布', icon: 'form' }
      }
    ]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: '博客管理', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: '文章管理', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },



  {
    path: '/manage',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '管理',
      icon: 'nested'
    },
    children: [
      // {
      //   path: 'menu1',
      //   component: () => import('@/views/nested/menu1/index'), // Parent router-view
      //   name: 'Menu1',
      //   meta: { title: 'Menu1' },
      //   children: [
      //     {
      //       path: 'menu1-1',
      //       component: () => import('@/views/nested/menu1/menu1-1'),
      //       name: 'Menu1-1',
      //       meta: { title: 'Menu1-1' }
      //     },
      //     // {
      //     //   path: 'menu1-2',
      //     //   component: () => import('@/views/nested/menu1/menu1-2'),
      //     //   name: 'Menu1-2',
      //     //   meta: { title: 'Menu1-2' },
      //     //   children: [
      //     //     {
      //     //       path: 'menu1-2-1',
      //     //       component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
      //     //       name: 'Menu1-2-1',
      //     //       meta: { title: 'Menu1-2-1' }
      //     //     },
      //     //     {
      //     //       path: 'menu1-2-2',
      //     //       component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
      //     //       name: 'Menu1-2-2',
      //     //       meta: { title: 'Menu1-2-2' }
      //     //     }
      //     //   ]
      //     // },
      //     {
      //       path: 'menu1-3',
      //       component: () => import('@/views/nested/menu1/menu1-3'),
      //       name: 'Menu1-3',
      //       meta: { title: 'Menu1-3' }
      //     }
      //   ]
      // },
      {
        path: 'category',
        component: () => import('@/views/nested/category/index'),
        meta: { title: '分类管理' }
      },
      {
        path: 'ad',
        component: () => import('@/views/nested/ad/index'),
        meta: { title: '广告管理' }
      },
      {
        path: 'information',
        component: () => import('@/views/nested/info/index'),
        meta: { title: '个人信息' }
      },
      {
        path: 'message',
        component: () => import('@/views/nested/message/index'),
        meta: { title: '留言查看' }
      }
    ]
  },
  {
    path: 'external1-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/rednodesky',
        meta: { title: '数据分析', icon: 'example' }
      }
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/rednodesky',
        meta: { title: 'GitHub', icon: 'link' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
