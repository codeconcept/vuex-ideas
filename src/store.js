import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ideas: {}
  },
  mutations: {
    CREATE_IDEA(state, payload) {
      const id = Date.now();
      state.ideas[id] = payload;
    }
  },
  actions: {}
});
