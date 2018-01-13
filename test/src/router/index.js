import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import skill from '@/components/skill'
import photo from '@/components/photo'
import mood from '@/components/mood'
import hehe from '@/components/hehe'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
     //  	{
     //  		path: '/',
	    //  	component: HelloWorld,
	    // },
	    {
	      path: '/home',
	      component: home
	    },
	    {
	      path: '/skill',
	      component: skill
	    },
	    {
	      path: '/photo',
	      component: photo
	    },
	      {
	      path: '/mood',
	      component: mood
	    },
	      {
	      path: '/hehe',
	      component: hehe
	    },

      ],
    },
    
    


  ],
  mode:'history'
})
