<template>
  <div>
    <div v-if="showContent">
      <ComponentCompetenecs />

      <ul id="example-1">
        <li v-for="item in heroesList" :key="item.id">
          {{ item.first_name }}
        </li>
      </ul>
    </div>

    <div v-else-if="!showContent">
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
</template>

<script>
import ComponentCompetenecs from "@/components/Competences/Competences";
import VueContentLoading from "vue-content-loading";
import getHeros from "../shared/data.js";

export default {
  name: "CompetencesCpt",

  data() {
    return {
      heroesList: [],
      showContent: false,
    };
  },

  created() {
    this.loadHeroes();
  },

  mounted() {},

  components: {
    ComponentCompetenecs,
    VueContentLoading,
  },
  methods: {
     async loadHeroes() {
      try {
        this.heroesList = await getHeros();
        // this.heroesList = this.$store.state.heroes;

        if (this.heroesList.length > 0) {
          this.showContent = true;
        }

      } catch (error) {
           //this.$router.reload();
          console.log(error)
      }
    },
  },
  computed: {},
};
</script>
