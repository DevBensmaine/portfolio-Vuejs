<template>
  <div id="app">
    <div v-if="!exist(currentRouteName)">
      <SlidBar />
    </div>

  <transition name="fade" :duration="{ enter: 200, leave: 60 }">
      <router-view />
  </transition>

  </div>
</template>

<script>
import SlidBar from "./components/Sidebar/sidebar";

export default {
  name: "App",
  components: {
    SlidBar,
  },
  created () {
    // console.log(this.Exist(this.currentRouteName));
  },
  methods: {
    exist(nameRoute) {
      const listRouter = ['notfound','DetailExperience'];
      const found = listRouter.find(element => element == nameRoute);
      if(found){
        return true
      }
      return false
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
