<template>
  <div>
    <div class="container-fluid p-0">
      <sideBar />
      <DetailExperience />
    </div>
  </div>
</template>

<script>
import getHero from '../../shared/data'
import sideBar from "./SlideBarDetail/SideBar";
import DetailExperience from "./DetailExperience/DetailExperience";
export default {
  name: "ContainerDetail",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created () {
    this.loadData();
  },
  methods: {
    async loadData() {
      const rest =  await getHero();
      console.log(rest)
    }
  },
  components: {
    sideBar,
    DetailExperience,
  },
};
</script>

<style lang="scss" scoped></style>
