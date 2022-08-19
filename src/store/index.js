import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weight: "",
    height: "",
  },
  
  getters: {},

  mutations: {
    setWeight(state, weight) {
      localStorage.setItem("weight", weight);
    },
    setHeight(state, height) {
      localStorage.setItem("height", height);
    },
  },

  actions: {
    setWeight({ commit }, weight) {
      commit("setWeight", weight);
    },
    setHeight({ commit }, height) {
      commit("setHeight", height);
    },
  },
  modules: {

  },
});