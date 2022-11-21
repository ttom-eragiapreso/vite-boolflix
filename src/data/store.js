import {reactive} from 'vue';

export const store = reactive({
  apiUrlMovie: 'https://api.themoviedb.org/3/search/movie',
  apiUrlTv: 'https://api.themoviedb.org/3/search/tv',
  newSearchTitle: '',
  categorySearched: '',
  apiResponseMovie: [],
  apiResponseTv: []
})