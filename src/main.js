import Vue from 'vue'
import App from './App.vue'
import '../src/assets/vendor/bootstrap/css/bootstrap.css'
import '../src/assets/vendor/fontawesome-free/css/all.min.css'
import "../src/assets/css/resume.css"
import router from './router'
import store from './store'

// import 'jquery/dist/'
// import '../src/assets/vendor/jquery/jquery.min.js'
// import '../src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
// import '../src/assets/vendor/jquery-easing/jquery.easing.min.js'
// import '../src/assets/js/resume.min.js'




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
