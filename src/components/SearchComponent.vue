<script>
import {store} from '../data/store'
export default {
  name: 'SearchComponent',
  data(){
    return {
      store
    }
  }
}
</script>

<template>
  <!-- Qui al tasto enter, al change della select, o al click del bottone faccio partire lo stesso emit che nel component header lancia la ricerca -->
  <div class="em-container d-flex ms-auto align-items-center">
    <input type="text" class="form-control" 
    v-model="store.newSearchTitle" 
    @keydown.enter="$emit('ricercaApi')">

    <select name="genre" id="genre" class="form-select mx-4" 
    v-model="store.categorySearched"
    @change="$emit('ricercaApi')"
    >
      <option value="">Scegli una categoria</option>
      <option value="movie">Film</option>
      <option value="tv">Serie Tv</option>
    </select>

    <button class="btn btn-info" 
    @click="$emit('ricercaApi')">Search</button>

  </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

input {
  min-width: 250px;
}

</style>