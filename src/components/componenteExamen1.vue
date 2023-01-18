<script>

import axios from 'axios';
import { GoogleMap, Marker } from 'vue3-google-map';

export default {
  name: "get-request",
  components: {
    GoogleMap,
    Marker
  },
  data() {
    return {
      vivienda: null,
      fechaInicio: null,
      fechaFin: null,
      huespedes: null,
      reservas: null,
      disponibles: true,
      pagoPendiente: false,
      loaded: false,
      paidFor: false,
      price: null,
      reservaObjeto: {},
      token: null,
      comentario: "",
      nombreUsuario: ""
    };
  },
  created() {
    /*this.token = localStorage.getItem('Token');
    if(this.token != null){
      let nombre = localStorage.getItem('NombreUsuario');
      console.log(nombre)
      let indice = nombre.indexOf("@");
      // Cortar desde 0 hasta la aparición del @
      this.nombreUsuario = nombre.substring(0, indice);
    }
    var parametro = this.$route.params.id;
    axios.get("https://o24sdy.deta.dev/appVivienda/vivienda", { params: { id: parametro } }).then(response => this.vivienda = response.data);
    axios.get("https://o24sdy.deta.dev/appReservas/reservas/viviendasAsociada/" + parametro).then(res => this.reservas = res.data);
    */
  },
  methods: {
    mapCenter() {
      return {
        //lat: parseFloat(this.vivienda.latitud),
        //lng: parseFloat(this.vivienda.longitud)
      }
    },
    mapMarker(latitud, longitud) {
      return {
        lat: latitud,
        lng: longitud
      }
    }
  }
}

</script>

<template>




    <table class="tabla-Grande">
      <tr>

        <td class="celda-Anuncio"><img src="https://plantillasdememes.com/img/plantillas/kirby-con-un-cuchillo01590090970.jpg" width="375" /></td>

        <td class="celda-Anuncio">

          <table class="tabla-Info">
            <tr>
              <td class="bold-text">Direccion:&nbsp;</td>
              <td> cosas{{  }}</td>
            </tr>

            <tr>
              <td class="bold-text">Localidad:&nbsp;</td>
              <td>cosas{{  }}</td>
            </tr>

            <tr>
              <td class="bold-text">Provincia:&nbsp;</td>
              <td>cosas{{  }}</td>
            </tr>

            <tr>
              <td class="bold-text">Características:&nbsp;</td>
              <td>cosas{{  }}</td>
            </tr>

            <tr>
              <td class="bold-text">Capacidad:&nbsp;</td>
              <td>cosas{{  }}</td>
            </tr>

            <tr>
              <td class="bold-text">Precio/día:&nbsp;</td>
              <td>cosas{{  }}</td>
            </tr>

            <tr>
              <td class="bold-text">Vendedor:&nbsp;</td>
              <td>cosas{{ }}</td>
            </tr>

          </table>

        </td>

        <td class="celda-Anuncio">
          <div class="panel-Reserva">

            <form @submit.prevent="sendForm">

              <div class="div-padding">
                <label for="diaEntrada" class="text-reserva">Día entrada</label><br />
                <input type="date" v-model="fechaInicio" required />
              </div>

              <div class="div-padding">
                <label for="diaSalida" class="text-reserva">Día salida:</label><br />
                <input type="date" v-model="fechaFin" required />
              </div>

              <div class="div-padding">
                <label for="huespedes" class="text-reserva">Huéspedes:</label><br />
                <input type="number" v-model="huespedes" min="1" required class="huespedes-box" />
              </div>

              <div class="div-padding">
                <label v-if="token == null">Necesitas iniciar sesion</label>
                <input v-if="token != null" type="submit" class="botonPersonalizado" value="Reservar" />
              </div>
            </form>

          </div>
        </td>

      </tr>
    </table>

    <div class="mapa">
      <GoogleMap api-key="AIzaSyAVotfCRyxA9y3yBiOafDlwoessHlHleJk"
        style="width: 400px; height: 400px; align: center; padding-left: 25%; padding-right: 25%;"
        :center="this.mapMarker(36.684624, -4.458037)" :zoom="16">
        <Marker :options="{ position: this.mapMarker(36.684624, -4.458037) }" />
        <Marker :options="{ position: this.mapMarker(36.691571, -4.455895) }" />
      </GoogleMap>
    </div>


</template>

<style scoped>
@import '../assets/mostrarInformacionStyle.css';
</style>

