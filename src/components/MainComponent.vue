<script>
import CardComponentVue from './CardComponent.vue';
import {store} from '../data/store'
export default {
  name: 'MainComponent',
  components: {
    CardComponentVue
  },
  data(){
    return {
      store
    }
  }
}
</script>

<template>
  
  <div class="em-container">

    <div class="container py-5">
      <div class="row row-cols-4">
      <CardComponentVue 
      v-for="(movie, index) in store.apiResponseMovie" :key="index"
      :img-path="movie.poster_path"
      :language="movie.original_language"
      :original-title="movie.original_title"
      :rating="movie.vote_average"
      :overview="movie.overview"
      />
    </div>

  </div>
   
  </div>
 
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

.em-container {
  min-height: 100vh;
  background-color: #333;
}

</style>