<template>
  <ul class="nav nav-tabs bg-primary pt-2">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="/">Usuarios</a>
    </li>
    <li class="nav-item">
      <router-link class="nav-link active" to="/telefonos">Telefonos</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Nav",

  data: function () {
    return {
      message: "dato 1",
    };
    
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
