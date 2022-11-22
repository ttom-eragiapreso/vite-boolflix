import {reactive} from 'vue';

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/',
  newSearchTitle: '',
  categorySearched: '',
  movie: [],
  tv: []
})