import Vue from 'vue'
import Router from 'vue-router'

// Components
const TastpaketComponent = () => import('@/home/TastpaketComponent')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/testpaket',
      name: 'testpaket',
      component: TastpaketComponent
    },
    { path: '*', redirect: '/testpaket' }
  ]
})
