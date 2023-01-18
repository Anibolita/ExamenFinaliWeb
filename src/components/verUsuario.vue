<script>

export default {
  data() {
    return {
      tokenID: localStorage.getItem('Token'),
      token: jwt_decode(localStorage.getItem('Token')),
      logs: null,
      imagen: null
    };
  },
   created() {
  //   axios.get("https://o24sdy.deta.dev/appLog/logs", { params: { nombre: this.token.email } } ).then(response => this.logs = response.data);
    this.imagen = this.token.picture;
  },
  // beforeUpdate(){
  //   axios.get("https://o24sdy.deta.dev/appLog/logs", { params: { nombre: this.token.email } } ).then(response => this.logs = response.data);
  // },
  methods: {
    convertirTiempo(tiempo) {

      const milliseconds = tiempo * 1000 // 1575909015000

      const dateObject = new Date(milliseconds)

      return dateObject.toLocaleString() //2019-12-9 10:30:15
    }

  }
}


</script>

<template>

  <h1> Informacion sobre el usuario</h1>
  <table class="tabla-Grande">
    <tr>

      <td class="celda-Anuncio"><img :src= 'token.picture' width="300" /></td>

      <td class="celda-Anuncio">

        <table class="tabla-Info">
          <tr>
            <td class="bold-text">Email:</td>
            <td>{{ token.email }}</td>
          </tr>

          <tr>
            <td class="bold-text">Nombre:</td>
            <td>{{ token.given_name }} {{ token.family_name }}</td>
          </tr>

          <tr>
            <td class="bold-text">Conexión:</td>
            <td>{{ convertirTiempo(token.iat) }}</td>
          </tr>

          <tr>
            <td class="bold-text">Caducidad:</td>
            <td>{{ convertirTiempo(token.exp) }}</td>
          </tr>

          <tr>
            <td class="bold-text">Token:</td>
            <td class="token-cell">{{ tokenID }}</td>
          </tr>
        </table>
      </td>

    </tr>
  </table>

  <!--  
  <h1> Informacion sobre el usuario (logs)</h1>

  <table class="tabla-logs" v-if="logs">
    <tr v-for="log in logs" :key="logs._id" class="fila-log">

          <tr>
            <td class="bold-text">Timestamp:</td>
            <td>{{ convertirTiempo(log.timestamp) }}</td>
            <td><br/></td>
          </tr>

          <tr>
            <td class="bold-text">Usuario:</td>
            <td>{{ log.email }}</td>
          </tr>

          <tr>
            <td class="bold-text">Caducidad:</td>
            <td>{{ convertirTiempo(log.expira) }}</td>
          </tr>

          <tr>
            <td class="bold-text">Token ID:</td>
            <td class="token-cell">{{ log.tokenID }}</td>
          </tr>

    </tr>
  </table> -->
</template>

<style>
@import '../assets/mostrarInformacionStyle.css';
</style>