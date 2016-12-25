/* eslint no-unused-expressions: 0 */
import 'whatwg-fetch';
import { polyfill } from 'es6-promise';
import Vue from 'vue';
import Thought from 'src/components/Thought';
import App from 'src/App';

polyfill();

describe('Thought.vue', () => {
  it('should render without exploding', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Thought),
    });
    expect(vm.$el).to.exist;
  });
});

describe('App.vue', () => {
  it('should render without exploding', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(App),
    });
    expect(vm.$el).to.exist;
  });
});
