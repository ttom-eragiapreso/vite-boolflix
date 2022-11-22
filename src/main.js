import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/flag-icons/css/flag-icons.min.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(fasStar, farStar)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
