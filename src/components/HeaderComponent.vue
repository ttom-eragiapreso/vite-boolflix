<script>
import SearchComponentVue from './SearchComponent.vue';
import axios from 'axios';
import {store} from '../data/store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  name: 'HeaderComponent',
  components: {
    SearchComponentVue,
    FontAwesomeIcon
},
  data(){
    return {
      store,
      apiKey: '3539645b3c4df152d5d06f3af64f348b',
    }
  },

  methods: {

    ricercaApi(type){
      // Quando lancio la ricerca, se nel v-model dell'input non c'è scritto niente assegno 'trending' al type così da comunque fare una ricerca dei trending
      if(store.newSearchTitle === "") type = 'trending'
      // Ad ogni ricerca svuoto gli array che contengono i risultati 
      store.movie = []
      store.tv = []
      // Se faccio la ricerca con un type vuoto, di fatti rilancio se stessa due volte passando una volta movie e una volta tv così da avere tutti e due i risultati di default.
      if(type === ""){
        this.ricercaApi('movie')
        this.ricercaApi('tv')
        return
      } 
      // La chiamata vera a propria
      axios.get(store.apiUrl + type, {
        params:{
          api_key: this.apiKey,
          query: store.newSearchTitle,
          language: 'it'
        }
      }
      )
      // Salvo i dati in un array in store, mentre movie e tv devo dichiararli in store per poi svuotarli, quando il type sarà trending, lui creerà da solo un array con dentro i risultati di trending grazie alla sintassi con le quadre invece della dot notation. 
      .then( response => {
        store[type] = response.data.results
      })
      .catch (error => console.log(error.code))

    }

  },

  mounted(){
    // Al mounted faccio la ricerca, che non avendo ancora nessuna stringa di ricerca fare partire la ricerca del trending
    this.ricercaApi()
  }
}
</script>

<template>
  <header class="d-flex align-items-center">
    <div class="container d-flex align-items-center">

      <h1 class="text-danger">BOOLFIX</h1>
      <SearchComponentVue @ricercaApi="ricercaApi(store.categorySearched)"/>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

header {
  height: $header-height;
  background-color: black;
}

</style>