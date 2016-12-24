<template>
  <div id="app">
    <thought name="flickr"
             url="https://api.flickr.com/services/rest?api_key=24084cab33ca5e8de996a7c9d393d81b&format=json&nojsoncallback=1">
    </thought>

    <h1 v-think data-think-about="flickr" data-think-with-params="method=flickr.cameras.getBrands" data-think-remember="brands.brand[0].name"></h1>
    <h1 v-think data-think-about="flickr" data-think-with-params="method=flickr.cameras.getBrands" data-think-remember="brands.brand[1].name"></h1>
    <!-- <h1 v-thought="flickr" v-thought.param="method=flickr.cameras.getBrands" v-memory="brands.brand[0].name"> -->

    <!-- Could also be: -->
    <!-- <h1 thought="flickr" path="getBrands"> -->
    <!-- If the API worked differently -->

    <!-- Other things: -->
    <!-- <h1 thought="flickr" thought.param="method=flickr.cameras.getBrands" memory="brands.brand[0].name" memory.transform="funcName"> -->

  </div>
</template>

<script>
import Thought from './components/Thought';

export default {
  name: 'app',
  components: {
    Thought,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
