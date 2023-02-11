import Vue from 'vue'
import VueRouter from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
// import D3Vim from '@/components/D3Vim'
// import D3Dagre from '@/components/D3Dagre'
import D3Node from '@/components/D3NodeForm'
import D3Edge from '@/components/D3EdgeForm'
import Login from '@/components/Login'
import Settings from '@/components/Settings'
import DiagramForm from '@/components/DiagramForm'
import DiagramList from '@/components/DiagramList'
import DagreGraphLib from '@/components/DagreGraphLib'

Vue.use(VueRouter)

// const routes = ({
  //mode: 'history',
// })

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        //default: HelloWorld,
        // d3vim: D3Vim,
        // //d3dagre: D3Dagre,
        // noded3: D3Node,
        // edged3: D3Edge,
        login: Login,
        settings: Settings,
        // diagramForm: DiagramForm,
        // diagramList: DiagramList,
        dagreGraphLib: DagreGraphLib
      }
    },
    {
      path: '/vim',
      components: {
        // d3vim: D3Vim,
        //dagred3: D3Dagre,
        noded3: D3Node,
        edged3: D3Edge,
        diagramForm: DiagramForm,
        diagramList: DiagramList,
      }
    },
    // {
    //   path: '/dagred3',
    //   components: {
    //     d3Dagre: D3Dagre,
    //   }
    // },
    {
      path: '/noded3',
      component: D3Node
    },
    {
      path: '/edged3',
      component: D3Edge
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/Settings',
      component: Settings
    },
    {
      path: '/DiagramForm',
      component: DiagramForm
    },
    {
      path: '/DiagramList',
      component: DiagramList
    },
    {
      path: '/test',
      components: {
        default: Login,
        //default: HelloWorld,
        settings: Settings,
        // login: Login,
        edgeform: D3Edge,
        nodeform: D3Node,
        // children:[{
        //     path: 'svg',
        //     component: D3Dagre
        // },{
        //     path: 'login',
        //     component: Login,
        // }],
      },
      // name: 'DagreGraphLib',
      // children:[{
      //     path: 'svg',
      //     component: D3Dagre
      // },{
      //     path: 'graphLib',
      //     component: DagreGraphLib,
      // }],
    }
  ]
})
export default router
