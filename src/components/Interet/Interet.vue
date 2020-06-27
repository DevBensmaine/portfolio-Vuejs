<template>
  <section
    class="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="interests"
  >
    <div class="w-100">
      <h2 class="mb-5">Intérêts</h2>
      <p>
      {{ internerObject.description }}
      </p>
    </div>
  </section>
</template>

<script>
import getHeros from "../../shared/data.js";

export default {
  name: "interet",
  data() {
    return {
      interner: [],
      internerObject: "",
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      this.interner = await getHeros();
      this.internerObject = this.interner[0].interts;

      // if (this.apropos.length > 0) {
      //   this.showContent = true;
      // }
    },
  },
};
</script>

<style lang="scss" scoped></style>
