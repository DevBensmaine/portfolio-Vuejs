<template>
  
       <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0"> {{ title}} </h3>
            <div class="subheading mb-3">{{ faculte }}</div>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">{{ date }}</span>
          </div>
        </div>

</template>

<script>
  export default {
    name:"item-Formation",
    props : ["title","date" ,"faculte"]

  }
</script>

<style lang="scss" scoped>

</style>