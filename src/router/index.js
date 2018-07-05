import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import store from '../store'
Vue.use(Router)


const router= new Router({
  routes: [
    {
      path: '/',
      redirect:'/home',
    },{
      path:'/home',
      component:layout,
      redirect:'/home/index',
      children:[
        {
          path:'/home/index',
          name:'home',
          meta:'首页',
          component:()=>import('@/components/home')
        }
      ]
    },{
      path:'/system',
      component:layout,
      redirect:'/system/index',
      children:[
        {
          path:'/system/index',
          name:'system',
          meta:'系统管理',
          component:()=>import('@/components/system/index'),
        },{
          path:'/system/addRole',
          name:'addRole',
          meta:'系统管理/新增角色',
          component:()=>import('@/components/system/addRole')
        },{
          path:'/system/alterRole',
          name:'alterRole',
          meta:'系统管理/修改角色',
          component:()=>import('@/components/system/alterRole')
        },
        {
          path:'/system/admin',
          name:'admin',
          meta:'系统管理/修改角色/管理员',
          component:()=>import('@/components/system/admin')
        },
        {
          path:'/system/normal',
          name:'normal',
          meta:'系统管理/修改角色/普通用户',
          component:()=>import('@/components/system/normal')
        }
      ]
    },{
      path:'/business',
      component:layout,
      redirect:'/business/index',
      children:[
        {
          path:'/business/index',
          name:'business',
          meta:'企业信息',
          component:()=>import('@/components/business/index'),
        },{
          path:'/business/new',
          name:'new',
          meta:'企业信息/新增企业',
          component:()=>import('@/components/business/new')
        },{
          path:'/business/maintain',
          name:'maintain',
          meta:'企业信息/企业信息维护',
          component:()=>import('@/components/business/maintain')
        }
      ]
    },{
      path:'/404',
      name:'not found',
      component:()=>import('@/components/notfound')
    }
  ]
})
router.beforeEach((to,from,next)=>{
  localStorage.setItem("curPathname",to.name);//设置路由全局钩子，实时将当前路由储存在本地，以便左边菜单使用
  next()
})
export default router