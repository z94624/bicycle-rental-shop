import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      bicycleNum: 20,
      rentNum: 0,
      hourRentalFee: 100,
      condition: true,
      rules: [
        "$100 each time.",
        "Please return no later than 18:00.",
        "Be safe.",
      ],
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
