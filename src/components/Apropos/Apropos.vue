<template>
<div>
 <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about"  v-if="showContent" >
      <div class="w-100">
        <h1 class="mb-0">{{aproposObject.lname}}
          <span class="text-primary">{{aproposObject.fname}}</span>
        </h1>
        <div class="subheading mb-5"> {{aproposObject.adresse}}
          <a href="mailto:bensmaine.hassan@gmail.com">{{aproposObject.email}}</a>
        </div>
        <p class="lead mb-5">
          {{aproposObject.description}}
        </p>
        <div class="social-icons">
          <a :href="aproposObject.socialList.linkLn">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a :href="aproposObject.socialList.gitHub">
            <i class="fab fa-github"></i>
          </a>
          <a :href="aproposObject.socialList.twitter">
            <i class="fab fa-twitter"></i>
          </a>
           <a :href="aproposObject.socialList.facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>



    </section>

    <div v-if="showContent == false">
       <vue-content-loading :width="300" :height="135" >
      <rect x="4" y="10" rx="2" ry="2" width="250" height="5" />
      <rect x="4" y="20" rx="2" ry="2" width="250" height="5" />
      <rect x="4" y="30" rx="2" ry="2" width="250" height="5" />
      <rect x="4" y="40" rx="2" ry="2" width="250" height="5" />
      <rect x="4" y="50" rx="2" ry="2" width="250" height="5" />
      <rect x="4" y="60" rx="2" ry="2" width="250" height="5" />
      <rect x="4" y="70" rx="2" ry="2" width="250" height="5" />
      <rect x="4" y="70" rx="2" ry="2" width="250" height="60" />

      <!-- <rect x="75" y="37" rx="4" ry="4" width="50" height="10" /> -->
    </vue-content-loading>
    </div>
</div>
</template>

<script>
import getHeros from "../../shared/data.js";
  import VueContentLoading from 'vue-content-loading';

  export default {
    name:"aprops",

    data() {
      return {
        apropos: [],
        aproposObject : '',
        showContent:false
        
      }
    },

    components: {
     VueContentLoading 
     
    },
    created () {
      this.loadData();
    },
    methods: {
      async loadData() {
        this.apropos = await getHeros()
        this.aproposObject = this.apropos[0].apropos
        if( this.apropos.length > 0 ){
          this.showContent = true
        }
        
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>