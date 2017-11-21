import Vue from 'vue'
// import FastClick from 'fastclick'
import Router from 'vue-router'
import Home from '@/pages/home'
import Share from '@/pages/share'
import User from '@/pages/user'
import HDetails from '@/pages/houseDetails'

Vue.use(Router)

// FastClick.attach(document.body)

export default new Router({
  routes: [
    {
    	path: '/',
    	component: Home
    },{
    	path: '/share',
    	component: Share
    },{
    	path: '/user',
    	component: User
    },{
        path: '/houseDetails',
        component: HDetails
    }]
})
