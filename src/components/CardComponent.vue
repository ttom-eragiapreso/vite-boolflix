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
            <div class="em-card info position-absolute p-2">
              <h3 v-if="title">Titolo: {{title}} </h3>
              <h3 class="my-4">Titolo Originale: {{originalTitle}}</h3>
              <h3 class="my-4">Voto: {{rating}}</h3>
              <div class="overview-container">
                <p>Overview: {{overview}}</p>
              </div>
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
  background-color: rgba(0, 0, 0, 0.8);
  color: rgb(220, 220, 220);
  width: 100%;
  height: 100%;
  transition: all .2s ease;
  // border: 1px solid rgb(221, 221, 221);
}

.img-container:hover .em-card.info  {
  opacity: 1;
}

.col {
  transition: all .25s ease;
  &:hover {
    transform: scale(1.03);
  }
  &.em-card{
    box-shadow: 0 0 12px 4px rgb(165, 165, 165);
  }
}

img {
  transition: all .4s ease;
}
.img-container:hover img {
  transform: scale(0.93);
}
.em-card, .img-container {
  border-radius: 5px;
  overflow: hidden;
  opacity: 1;
  transition: all .25s ease;
}

.em-card {
  box-shadow: 0 0 8px 0px rgb(111 111 111);
}

.overview-container{
  height: calc(100% - 200px);
  overflow: auto;
}

</style>