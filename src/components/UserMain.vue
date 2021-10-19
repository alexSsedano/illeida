<template>
  <div class="row  d-flex justify-content-around pt-5 ">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 card pt-5 pb-5">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Nombre de usuario</label
          >
          <input
            type="userName"
            class="form-control"
            v-model="usuario"
            aria-describedby="emailHelp"
          />
          
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Contraseña</label>
          <input
            type="password"
            v-model="contraseña"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" class="btn btn-primary" v-on:click="getusers">
          Enviar
        </button>
      </form>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 card pt-5 pb-5">
      <ul class="list-group">
        <li
          v-for="(user) in this.usuarios"
          :key="user.id"
          class="
          pt-5 pb-5
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          {{user.contact_name}}
          <span class="badge bg-primary badge-pill">Id:{{user.id}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;
export default {
  name: "UserMain",

  data: function () {
    return {
      message: "dato 1",
      datos:[],
      usuarios: [],
      usuario: "",
      contraseña: "",
    };
  },
  methods: {
    getusers: function () {
      axios
        .get(
          "https://api.lleida.net/admin/v2/?provider="+this.usuario+"&password="+this.contraseña+"&request=list&offset=0&limit=3 HTTP/1.1"
        )
        .then((response) => (this.datos = response));

        this.usuarios = this.datos.data.user_list.users;
    },
  },
};
</script>

