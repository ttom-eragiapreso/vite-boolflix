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

      store.movie = []
      store.tv = []

      if(type === ""){
        this.ricercaApi('movie')
        this.ricercaApi('tv')
        return
      } 

      axios.get(store.apiUrl + type, {
        params:{
          api_key: this.apiKey,
          query: store.newSearchTitle,
          language: 'it'
        }
      }
      )
      .then( response => {
        store[type] = response.data.results
      })
      .catch (error => console.log(error.code))

    }

  },

  mounted(){

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