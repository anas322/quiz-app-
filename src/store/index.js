import { createStore } from "vuex";

import data from "./quizData";

export default createStore({
  state: {
    data,
  },
  getters: {
    getData(state) {
      return state.data;
    },
    getSize(state) {
      return state.data.length;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
