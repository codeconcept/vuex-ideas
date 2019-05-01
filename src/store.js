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
      state.ideas = { ...state.ideas };
    }
  },
  actions: {
    createIdea({ commit }, payload) {
      commit("CREATE_IDEA", payload);
    }
  },
  getters: {
    allIdeas(state) {
      const allIdeas = Object.keys(state.ideas).map(key => state.ideas[key]);
      console.log(allIdeas);
      return allIdeas;
    }
  }
});
