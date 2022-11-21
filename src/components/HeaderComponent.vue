<script>
import SearchComponentVue from './SearchComponent.vue';
import axios from 'axios';
import {store} from '../data/store'
export default {
  name: 'HeaderComponent',
  components: {
    SearchComponentVue
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
      axios.get(store.apiUrl, {
        params:{
          api_key: this.apiKey,
          query: store.newSearchTitle
        }
      }
      )
      .then( response => {
        store.apiResponse = response.data.results
      })
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
  background-color: gray;
}

</style>