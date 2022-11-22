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
  computed: {
   
  },

  methods: {

    ricercaApi(){

      axios.get(store.apiUrlMovie, {
        params:{
          api_key: this.apiKey,
          query: store.newSearchTitle,
          language: 'it'
        }
      }
      )
      .then( response => {
        store.apiResponseMovie = response.data.results
      })
      .catch (error => console.log(error.code))

     axios.get(store.apiUrlTv, {
      params: {
        api_key: this.apiKey,
        query: store.newSearchTitle,
        language: 'it'
      }
     })
     .then( response => store.apiResponseTv = response.data.results)
     .catch (error => console.log(error.code))
    }

  }
}
</script>

<template>
  <header class="d-flex align-items-center">
    <div class="container d-flex align-items-center">

      <h1 class="text-danger">BOOLFIX</h1>
      <SearchComponentVue @ricercaApi="ricercaApi()"/>
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