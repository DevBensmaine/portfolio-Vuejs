<template>
  <div>
    <!-- Viseo -->
    <div
      class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
    >
      <div class="resume-content">
        <h3 class="mb-0">{{ titleJob }}</h3>
        <div class="subheading mb-3">{{ societe }}</div>

        <div class="mission" v-for="item in missions" :key="item.title">
          <i class="fas fa-caret-right"></i>
          <p>{{ item.title }}</p>
        </div>

        <p v-if="listproject.length > 0" class="projet-realiser">
          Ex.
          <a
            :href="links.title"
            v-for="links in listproject"
            :key="links.title"
            target="_blank"
            >{{ links.title }} ,
          </a>
        </p>

        <div class="detail-projet projet-realiser">
          <i class="fas fa-angle-right"></i>
          <p>
            Pour avoir plus de détails sur les projets réalisés
            <router-link tag="a" :to="{name: 'DetailExperience', params:{id: idEx} }">Clique ici</router-link>

          </p>
        </div>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{{ date }}</span>
      </div>
    </div>
    <!-- fin de viseo -->
    <!-- <hr class="m-0"> -->
  </div>
</template>

<script>
export default {
  name: "experienceItem",
  props: ["titleJob", "societe", "date", "missions", "listproject" ,"idEx"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
