<template>
  <div class="home">
    
    <Comp1 msg="Dato"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Comp1 from '@/components/Comp1.vue'

export default {
  name: 'Home',
  components: {
    Comp1
  }
}
</script>
