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
  // La card si aspetta questi props dal genitore per popolare se stessa. Col senno di poi avrei potuto semplicemente fare un oggetto con dentro tutte queste proprietà per risparmiare questo spazio, anche se dopo quando le uso avrei dovuto usare la dot notation per ogni proprietà
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
    // Utility che mi ritorna il percorso giusto per prendere l'immagine 
    createImgPath(posterPath){
      return `${this.imgPathAbsolute}${posterPath}`
    },
    // Utility che mi ritorna il rating sotto forma di stelle
    fromRatingToStars(rating){
      return Math.ceil(rating *.5)
    },
    // Utility che mi ritorna il nome della classe corretta per mostrare la bandiera del paese, ho fatto questo numero di casi, con il default che inverte la flag e ti ritorna il parametro passato che sarebbe la proprietà original_language del resultato che viene dall'API.
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
            <!-- Se ce l'immagine poster uso quella, altrimenti uso quella di backdrop, se non ce n'è nessuna a monte la card non viene mostrata -->
            <img v-if="imgPath" :src="createImgPath(imgPath)" alt="">
            <img v-else :src="createImgPath(backdropPath)" alt="">
            <!-- La card che appare all'hover -->
            <div class="em-card info position-absolute p-3">
              <h3 v-if="title">Titolo: {{title}} </h3>
              <h3 class="my-3">Titolo Originale: {{originalTitle}}</h3>
              <span class="fs-3 pe-3">Lingua:</span>
              <!-- Se esiste la bandierina allora la mostro -->
              <span v-if="this.isFlag" class="fi" :class="languageToCode(language)"></span>
              <!-- Altrimenti metto uno span con la language che mi arriva -->
              <span v-else class="fs-3">{{language}}</span>
              <h3 class="my-3"><span class="pe-4">Voto</span>
              <!-- Per le stelline prima ne stampo tante piene quanto è il voto in base 5 -->
              <font-awesome-icon icon="fa-solid fa-star" v-for="n in fromRatingToStars(rating)" :key="n" />
              <!-- Poi uso questo metodo per stampare le restanti vuote, se il film ha 5 stelle, 5-5=0 e non mi stampa nessuna stella vuota -->
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