<template>
  <div class="thought"></div>
</template>

<script>
import Vue from 'vue';
import jsonQuery from 'json-query';

const bus = new Vue();

Vue.directive('think', {
  inserted(el) {
    bus.$emit('thinking-about', el, el.dataset.thinkAbout, el.dataset.thinkWithParams, el.dataset.thinkRemember);
  },
  update(el) {
    bus.$emit('thinking-about', el, el.dataset.thinkAbout, el.dataset.thinkWithParams, el.dataset.thinkRemember);
  },
});

const jsonPromises = {};
const fetchPromises = {};

export default {
  name: 'thought',
  props: ['name', 'url'],
  data() {
    return {
    };
  },
  created() {
    bus.$on('thinking-about', (el, about, withParams, remember) => {
      const elToUpdate = el;
      const fullURL = `${this.url}&${withParams}`;

      if (!fetchPromises[fullURL]) {
        fetchPromises[fullURL] = fetch(fullURL);
      }

      fetchPromises[fullURL].then((res) => {
        res.clone().json().then((json) => {
          jsonPromises[fullURL] = json;
          elToUpdate.innerHTML = jsonQuery(remember, { data: jsonPromises[fullURL] }).value;
        });
      });
    });
  },
};
</script>
