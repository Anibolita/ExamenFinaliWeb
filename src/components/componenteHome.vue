<script>

import axios from 'axios';
import { GoogleMap, Marker } from 'vue3-google-map';

export default {
    name: 'GPS4',
    components: {
    GoogleMap,
    Marker
  },
    data() {
        return {
            direccion: this.resul_dir,
            latitud: this.resul_lat,
            longitud: this.resul_lng,
            parkings: null,
            mapa: null
        }
    },
    created() {
        axios.get("https://o24sdy.deta.dev/appParking/parking").then(response => this.parkings = response.data);
    },
    methods: {
 mapCenter() {
            return {
                lat: parseFloat(this.vivienda.latitud),
                lng: parseFloat(this.vivienda.longitud)
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

    <h1>Buscar Parking</h1>
    <form @submit.prevent="upload()">

        <!-- Autocomplete location search input -->
        <label for="direccion">Direccion*</label><br>
        <input class="w-full" id="place-input" type="text" required size="100" />
        <br>

        <input type="submit" value="Buscar">

    </form>

    <div class="mapa">
        <GoogleMap api-key="AIzaSyAVotfCRyxA9y3yBiOafDlwoessHlHleJk"
            style="width: 400px; height: 400px; align: center; padding-left: 25%; padding-right: 25%;"
            :center="this.mapMarker(36.7201600, -4.4203400)" :zoom="13">
            <v-for v-for="parking in parkings" :key="parking._id">
                <Marker :options="{ position: this.mapMarker(parking.latitud, parking.longitud) }" />
            </v-for>
        </GoogleMap>
    </div>

    <table class="tabla-Todo">
        <tr class="fila-encabezado">
            <td class="celda-text">poiID</td>
            <td class="celda-text">nombre</td>
            <td class="celda-text">direccion</td>
            <td class="celda-text">latitud</td>
            <td class="celda-text">longitud</td>
            <td class="celda-text">capacidad</td>
            <td class="celda-text">libres</td>
            <td class="celda-text2">correo</td>
        </tr>
        <tr class="fila" v-for="parking in parkings" :key="parking._id">

            <td class="celda-text"> {{ parking.poiID }} </td>
            <td class="celda-text"> {{ parking.nombre }} </td>
            <td class="celda-text"> {{ parking.direccion }} </td>
            <td class="celda-text"> {{ parking.latitud }} </td>
            <td class="celda-text"> {{ parking.longitud }} </td>
            <td class="celda-text"> {{ parking.capacidad }} </td>
            <td class="celda-text"> {{ parking.libres }} </td>
            <td class="celda-text2"> {{ parking.correo }} </td>

        </tr>
    </table>
</template>

<style>
@import '../assets/componenteHomeStyle.css';
@import '../assets/listasStyle.css';
</style>