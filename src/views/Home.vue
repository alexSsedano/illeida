<template>
  <div >
    <Nav/>
    <UserMain/>
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from '@/components/Nav.vue'
import UserMain from '@/components/UserMain.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    UserMain
  }
}
</script>
