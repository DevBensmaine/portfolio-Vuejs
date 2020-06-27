<template>
 
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
      <div class="w-100">
        <h2 class="mb-5">Mes Certifications</h2>
        <ul  class="fa-ul mb-0">
          <li v-for="item in certificationObject" :key="item.certif" >
            <i class="fa-li fa fa-trophy text-warning"></i>
          {{ item.certif }}
          </li>
        </ul>

      </div>
    </section>
</template>

<script>

import getHeros from "../../shared/data.js";

  export default {
    name:"Cerficaitions",
    data() {
      return {
         certification: [],
         certificationObject: "",
      }
    },
      created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      this.certification = await getHeros();
      this.certificationObject = this.certification[0].certification;
      console.log("ciiicic")
      console.log(  this.certificationObject)
      // if (this.apropos.length > 0) {
      //   this.showContent = true;
      // }
    },
  },
  }
</script>

<style lang="scss" scoped>

</style>