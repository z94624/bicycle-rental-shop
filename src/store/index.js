import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bicycleNum: 20,
    rentNum: 0,
    hourRentalFee: 100,
    condition: true,
    rules: [
      "$100 each time.",
      "Please return no later than 18:00.",
      "Be safe.",
    ],
  },
  mutations: {
    // App.vue
    plusOne: function (state) {
      state.bicycleNum = state.bicycleNum + 1;
      if (state.bicycleNum == 0) {
        state.condition = false;
      } else {
        state.condition = true;
      }
    },
    minusOne: function (state) {
      state.bicycleNum = state.bicycleNum - 1;
      state.rentNum += 1;
      if (state.bicycleNum == 0) {
        state.condition = false;
      } else {
        state.condition = true;
      }
    },
    resetAllData: function (state) {
      state.bicycleNum = 20;
      state.rentNum = 0;
    },
  },
  getters: {
    // App.vue
    isdisabledPlusFn(state) {
      if (state.bicycleNum == 20) {
        return true;
      } else {
        return false;
      }
    },
    isdisabledMinusFn(state) {
      if (state.bicycleNum == 0) {
        return true;
      } else {
        return false;
      }
    },
    // TotalIncome.vue
    calculateIncome: function (state) {
      return state.rentNum * 100;
    },
  },
  actions: {},
  modules: {},
});
