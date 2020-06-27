<template>
  <ul  class="list-inline dev-icons">
      <li v-for="item in listIcon" :key="item.icon"   class="list-inline-item">
          <i :class="item.icon"></i>
      </li>
  </ul>
</template>

<script>
  export default {
    name:"CompetenceItem",
    props: ["listIcon"],
    data() {
      return {
      
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>