import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ideas: {},
    courses: [],
    paperWork: [],
    appointments: []
  },
  mutations: {
    CREATE_IDEA(state, payload) {
      const id = Date.now();
      state.ideas[id] = payload;
      state.ideas = { ...state.ideas };
    },
    SAVE_IDEAS_ORDERING(state, payload) {
      state.ideas = { ...payload };
    },
    SAVE_COURSES_ORDERING(state, payload) {
      state.courses = [...payload];
    },
    SAVE_PAPERWORK_ORDERING(state, payload) {
      state.paperWork = [...payload];
    },
    SAVE_APPOINTMENTS_ORDERING(state, payload) {
      state.appointments = [...payload];
    }
  },
  actions: {
    createIdea({ commit }, payload) {
      commit("CREATE_IDEA", payload);
    },
    saveIdeasOrdering({ commit }, payload) {
      const ideas = {};
      payload.map(idea => {
        ideas[idea.id] = idea;
      });
      commit("SAVE_IDEAS_ORDERING", payload);
    },
    saveCoursesOrdering({ commit }, payload) {
      commit("SAVE_COURSES_ORDERING", payload);
    },
    savePaperWorkOrdering({ commit }, payload) {
      commit("SAVE_PAPERWORK_ORDERING", payload);
    },
    saveAppointmentsOrdering({ commit }, payload) {
      commit("SAVE_APPOINTMENTS_ORDERING", payload);
    }
  },
  getters: {
    allIdeas(state) {
      const allIdeas = Object.keys(state.ideas).map(key => state.ideas[key]);
      console.log(allIdeas);
      return allIdeas;
    },
    courses(state) {
      return state.courses;
    },
    paperWork(state) {
      return state.paperWork;
    },
    appointments(state) {
      return state.appointments;
    }
  }
});
