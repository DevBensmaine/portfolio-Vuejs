<template>
<div>
   <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">
      <span class="d-block d-lg-none">Hassan Bensmaine</span>
      <span class="d-none d-lg-block">
        <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="@/assets/images/profile.jpg" alt="">
      </span>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link  tag="a" class="nav-link js-scroll-trigger"  exact to="/">
            à-propos
          </router-link> 
        </li>
        <li class="nav-item">
          <router-link  tag="a" class="nav-link js-scroll-trigger"  to="/experiences">
            EXPÉRIENCES
          </router-link> 
        </li>
        <li class="nav-item">
          <router-link  tag="a" class="nav-link js-scroll-trigger"  to="/formations">
            FORMATION
          </router-link> 
        </li>
        <li class="nav-item">
          <router-link  tag="a" class="nav-link js-scroll-trigger"  to="/Competences">
             COMPÉTENCES
          </router-link> 
        </li>
        <li class="nav-item">
          <router-link  tag="a" class="nav-link js-scroll-trigger"  to="/Interet">
             Intérêts
          </router-link> 
        </li>
        <li class="nav-item">
          <router-link  tag="a" class="nav-link js-scroll-trigger"  to="/Certification">
             Mes certifications
          </router-link> 
        </li>
      </ul>
    </div>
  

  </nav>


    
</div>


</template>

<script>

//  import VueContentLoading from 'vue-content-loading';

  export default {
    
    data() {
      return {
        image: ''
      }
    },
    components: {
      // VueContentLoading,
    },
  }
</script>

<style lang="scss" scoped>

</style>