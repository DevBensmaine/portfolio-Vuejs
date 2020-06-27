<template>
  <ul class="fa-ul mb-0">
    <li v-for="item in workflows" :key="item.title">
      <i  class="fa-li fa fa-check"></i>
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "workflow",
  props: ["workflows"],
};
</script>

<style lang="scss" scoped></style>
