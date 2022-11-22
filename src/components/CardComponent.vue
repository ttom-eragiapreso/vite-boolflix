<script>
import {store} from '../data/store'
export default {
  name: 'CardComponent',
  data(){
    return {
      store,
      imgPathAbsolute: 'https://image.tmdb.org/t/p/w342/',
      isFlag: true
    }
  },
  props: {
    imgPath: String,
    title: String,
    originalTitle: String, 
    language: String,
    rating: Number,
    overview: String,
    backdropPath: String,
    name: String
  },

  methods: {
    createImgPath(posterPath){
      return `${this.imgPathAbsolute}${posterPath}`
    },
    fromRatingToStars(rating){
      return Math.ceil(rating *.5)
    },
    languageToCode(lang){
      switch(lang){
        case 'it': return 'fi-it'
        case 'en': return 'fi-gb'
        case 'ja': return 'fi-jp'
        case 'de': return 'fi-de'
        case 'hu': return 'fi-hu'
        case 'fr': return 'fi-fr'
        case 'ru': return 'fi-ru'
        case 'es': return 'fi-es'
        default: {
          this.isFlag = false
          return lang
          } 
      }
    }
  }
}
</script>

<template>
      <!-- Mostro la col solo se c'è almeno una delle due immagini -->
      <div class="col mb-3" v-if="imgPath || backdropPath">

        <div class="em-card position-relative">
          <div class="img-container">

            <img v-if="imgPath" :src="createImgPath(imgPath)" alt="">
            <img v-else :src="createImgPath(backdropPath)" alt="">
            <div class="em-card info position-absolute p-3">
              <h3 v-if="title">Titolo: {{title}} </h3>
              <h3 class="my-3">Titolo Originale: {{originalTitle}}</h3>
              <span class="fs-3 pe-3">Lingua:</span>
              <span v-if="this.isFlag" class="fi" :class="languageToCode(language)"></span>
              <span v-else class="fs-3">{{language}}</span>
              <h3 class="my-3"><span class="pe-4">Voto</span> 
              <font-awesome-icon icon="fa-solid fa-star" v-for="n in fromRatingToStars(rating)" :key="n" />
              <font-awesome-icon icon="fa-regular fa-star" v-for="n in (5 - fromRatingToStars(rating))" :key="n"/>
              </h3>
              <div class="overview-container">
                <p class="fs-5"> <strong>Overview: </strong>{{overview}}</p>
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
  height: calc(100% - 210px);
  overflow: auto;
}

</style>