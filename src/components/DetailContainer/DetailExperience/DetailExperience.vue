<template>
  <div>
    <Presentation/>
    <Realisation/>
  </div>
</template>

<script>
import Presentation from '../Presentation/Presentation';
import Realisation from '../Realisation/Realisation';

  export default {
    name:"DetailExpeience",
    components: {
      Presentation,
      Realisation

    },
  }
</script>