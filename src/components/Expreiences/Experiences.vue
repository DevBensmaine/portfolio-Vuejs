<template>
  <section
    class="resume-section p-3 p-lg-5 d-flex justify-content-center"
    id="experience"
  >
    <div class="w-100">
      <h2 class="mb-5">EXPÉRIENCES</h2>

      <div v-if="showContent == true" >
          <div  v-for="item in listObjectExperience" :key="item.id">
            <!-- <p>{{item.titleJob}}</p> -->
            <ItemExperiences
              :idEx="item.id"
              :titleJob="item.titleJob"
              :societe="item.societe"
              :date="item.date"
              :missions="item.missions"
              :listproject="item.list_projet"
            />
          </div>
      </div>

          <div v-if="showContent == false">
            <vue-content-loading :width="300" :height="135">
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
  </section>
</template>

<script>
import ItemExperiences from "./ExperienceItem";
import getHeros from "../../shared/data.js";
import VueContentLoading from "vue-content-loading";


export default {
  name: "componentExpeirences",
  data() {
    return {
      listExperience: [],
      listObjectExperience: "",
      showContent: false
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      this.listExperience = await getHeros();
      this.listObjectExperience = this.listExperience[0].experiences;
      if (this.listObjectExperience.length > 0) {
       this.showContent = true; 
      }
    },
  },
  components: {
    ItemExperiences,
    VueContentLoading
  },
};
</script>

<style lang="scss" scoped></style>
