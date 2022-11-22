<script>
// Importo il componente che contiene la card
import CardComponentVue from './CardComponent.vue';
// Importo lo store reattivo per la condivisone di dati
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

    <div class="container" v-if="store.movie.length > 0 || store.tv.length > 0">

        <div class="container pt-5">
        <h2 class="text-white mb-5" v-if="store.movie.length > 0">FILMS</h2>
        <div class="row row-cols-4">
          <CardComponentVue 
          v-for="(movie, index) in store.movie" :key="index"
          :img-path="movie.poster_path"
          :language="movie.original_language"
          :original-title="movie.original_title"
          :rating="movie.vote_average"
          :overview="movie.overview"
          :backdrop-path="movie.backdrop_path"
        />
        </div>
      </div>

      <div class="container">
        <h2 class="text-white my-5" v-if="store.tv.length > 0">TV SERIES</h2>
        <div class="row row-cols-4">
          <CardComponentVue 
          v-for="(tv, index) in store.tv" :key="index"
          :img-path="tv.poster_path"
          :language="tv.original_language"
          :name="tv.name"
          :rating="tv.vote_average"
          :overview="tv.overview"
          :backdrop-path="tv.backdrop_path"
          />
        </div>
        
      </div>

    </div>
    <div class="container py-5 text-center" v-else>
      <h2 class="text-white fs-1">Cerca un film o una serie Tv!</h2>
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