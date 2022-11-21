<script>
import {store} from '../data/store'
export default {
  name: 'CardComponent',
  data(){
    return {
      store,
      imgPathAbsolute: 'https://image.tmdb.org/t/p/w342/'
    }
  },
  props: {
    imgPath: String,
    title: String,
    originalTitle: String, 
    language: String,
    rating: Number,
    overview: String
  },

  computed: {
    
  },

  methods: {
    createImgPath(posterPath){
      return `${this.imgPathAbsolute}${posterPath}`
    }
  }
}
</script>

<template>
  
      <div class="col mb-3">

        <div class="em-card position-relative">

          <div class="img-container">
            <img :src="createImgPath(imgPath)" alt="">
            <div class="em-card info position-absolute overflow-auto p-2">
              <h3 v-if="title">Titolo: {{title}} </h3>
              <h3>Titolo Originale: {{originalTitle}}</h3>
              <h3>Voto: {{rating}}</h3>
              <p>Overview: {{overview}}</p>
            </div>
          </div>
        </div>


      </div>


</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;



.em-card.info {
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 100%;
  transition: all .2s ease;
}

.img-container:hover .em-card.info  {
  opacity: 1;
}


.em-card, .img-container {
  border-radius: 5px;
  overflow: hidden;
  opacity: 1;
}

</style>