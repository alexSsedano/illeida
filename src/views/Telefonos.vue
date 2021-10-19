<template>
  <div >
    <Nav/>
    <MainTelefonos/>
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from '@/components/Nav.vue'
import MainTelefonos from '@/components/MainTelefonos.vue'

export default {
  name: 'Telefonos',
  components: {
    Nav,
    MainTelefonos
  }
}
</script>
