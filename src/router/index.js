import Vue from 'vue'
import VueRouter from 'vue-router'

import Apropos from '../views/Apropos.vue'
import VExperiences from '../views/Experiences.vue'
import VFormations from '../views/Formation.vue'
import VCompetences from '../views/Competences.vue'
import VInteret from '../views/Interet.vue'
import VCertification from '../views/Certifications.vue'
import VDetailExperience from '../views/DetailContainer.vue'

import VNotFound from '../views/NotFound.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Apropos',
    component: Apropos
  },
  {
    path: '/experiences',
    name: 'experiences',
    component: VExperiences
  },
  {
    path: '/formations',
    name: 'formation',
    component: VFormations
  },
  {
    path: '/Competences',
    name: 'Competences',
    component: VCompetences
  },

  {
    path: '/Interet',
    name: 'Interet',
    component: VInteret
  },
  {
    path: '/Certification',
    name: 'Certification',
    component: VCertification
  },
  {
    path: '/DetailExperience/:id',
    name: 'DetailExperience',
    component: VDetailExperience,
    props :true
    // props:r => ({id : parseInt(r.params.id)})
  }
  ,
  {
    path: '*',
    name: 'notfound',
    component: VNotFound
  }
  // {
  //   // path: '/about',
  //   // name: 'About',
  //   // // route level code-splitting
  //   // // this generates a separate chunk (about.[hash].js) for this route
  //   // // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
