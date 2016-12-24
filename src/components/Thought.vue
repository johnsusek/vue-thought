<template>
  <div class="thought"></div>
</template>

<script>
import Vue from 'vue';
import jsonQuery from 'json-query';

const bus = new Vue();

// The API for a Vue component comes in three parts - props, events, and slots:
// - Props allow the external environment to pass data into the component
// - Events allow the component to trigger side effects in the external environment
// - Slots allow the external environment to compose the component with extra content.

Vue.directive('think', {
  // bind(el) {
  //   console.log('Thinking element bound', el);
  // },
  inserted(el) {
    console.log('Thinking element inserted', el, el.dataset);
    bus.$emit('thinking-about', el, el.dataset.thinkAbout, el.dataset.thinkWithParams, el.dataset.thinkRemember);
  },
  update(el) {
    console.log('Thinking element updated', el, el.dataset);
    bus.$emit('thinking-about', el, el.dataset.thinkAbout, el.dataset.thinkWithParams, el.dataset.thinkRemember);
  },
  // componentUpdated(el) {
  //   console.log('Thinking element componentUpdated', el);
  // },
  // unbind(el) {
  //   console.log('Thinking element unbound', el);
  // },
});

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
      console.log('An element wants to think about', about, withParams, remember);
      fetch(`${this.url}&${withParams}`).then((res) => {
        res.json().then((memory) => {
          console.log('Remembered', jsonQuery(remember, { data: memory }));
          elToUpdate.innerHTML = jsonQuery(remember, { data: memory }).value;
        });
      });
    });
  },
};
</script>
