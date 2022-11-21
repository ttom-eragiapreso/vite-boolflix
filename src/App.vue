<script>
import {store} from './data/store'
import HeaderComponentVue from './components/HeaderComponent.vue';
import SearchComponentVue from './components/SearchComponent.vue';
import MainComponentVue from './components/MainComponent.vue';
import CardComponentVue from './components/CardComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponentVue,
    SearchComponentVue,
    MainComponentVue,
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

  <HeaderComponentVue/>
  <MainComponentVue/>

</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>