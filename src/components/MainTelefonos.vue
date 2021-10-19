<template>
  <div class="row d-flex justify-content-around pt-5">
    <div class="col-5 card pt-5 pb-5">
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label"
            >Contraseña</label
          >
          <input
            type="password"
            v-model="contraseña"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Mensaje</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary mt-5" v-on:click="sms">
          Enviar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;
export default {
  name: "UserMain",

  data: function () {
    return {};
  },
  methods: {
    sms: function () {
      axios.post("https://api.lleida.net//sms/v2/ HTTP/1.1");
    },
  },
};
</script>

