<template>
  <div>
       <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div class="w-100">
        <h2 class="mb-5">COMPÉTENCES</h2>

        <div class="subheading mb-3">LANGAGES &amp; OUTILS DE PROGRAMMATION</div>      
          <CompetenceItem :listIcon="listObjectCompetenecesSkills"/> 
        <div class="subheading mb-3">Workflow</div>

    
          <CompetenceWorkflow :workflows ="listObjectCompetenecesWorkflow"/>

      </div>
    </section>
  </div>
</template>

<script>

import getHeros from "../../shared/data.js";
import CompetenceItem from './CompetenceItem';
import CompetenceWorkflow from './CompetenceWorkflow'
  export default {
    name:'Competeneces',

    data() {
      return {
        listCompeteneces: [],
        listObjectCompetenecesSkills: [],
        listObjectCompetenecesWorkflow: [],
        showContent: false
      }
    },
     created() {
        this.loadData();
      },
      methods: {
        async loadData() {
          this.listCompeteneces = await getHeros();
          this.listObjectCompetenecesSkills = this.listCompeteneces[0].skills;
          this.listObjectCompetenecesWorkflow = this.listCompeteneces[0].workflow;
          // if (this.listObjectCompeteneces.length > 0) {
          // this.showContent = true; 
          // }
        },
      },
    components: {
      CompetenceItem,
      CompetenceWorkflow
    },
  }
</script>

<style lang="scss" scoped>

</style>