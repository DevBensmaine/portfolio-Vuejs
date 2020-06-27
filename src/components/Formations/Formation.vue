<template>
   <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
      <div class="w-100">
          <h2 class="mb-5">FORMATION</h2>
          <div v-for="item in listObjectFormation" :key="item.title">
             <FormationItem  :title = "item.title" :date = "item.date"  :faculte = "item.faculte"  />
          </div>
      </div>
   </section>
</template>

<script>
import FormationItem from './FormationItem'
import getHeros from "../../shared/data.js";

  export default {
    name:"formations",

    data() {
      return {
        listFormations : [],
        listObjectFormation :[]
      }
    },
     created() {
    this.loadData();
  },
    methods: {
      async loadData() {
        this.listFormations = await getHeros();
        this.listObjectFormation = this.listFormations[0].formations;
        if (this.listObjectFormation.length > 0) {
          //  this.showContent = true; 
        }
      }
      },
    components: {
      FormationItem,
    },
  }
</script>

<style lang="scss" scoped>

</style>