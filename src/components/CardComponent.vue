<script>
import {store} from '../data/store'
export default {
  name: 'CardComponent',
  data(){
    return {
      store,
      imgPath: 'https://image.tmdb.org/t/p/w342/'
    }
  },
  props: {
    imgPath: String,
    title: String,
    originalTitle: String, 
    language: String,
    rating: Number
  },

  computed: {
    
  },

  methods: {
    createImgPath(posterPath){
      return `${this.imgPath}${posterPath}`
    }
  }
}
</script>

<template>
  
      <div class="col px-2 mb-2">
        <div class="em-card">
          <div class="img-container">
            <img :src="createImgPath(imgPath)" alt="">
          </div>
        </div>

      </div>


</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;


li {
  color: white;
}


</style>