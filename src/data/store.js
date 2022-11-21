import {reactive} from 'vue';

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/movie',
  newSearchTitle: '',
  categorySearched: '',
  apiResponse: []
})