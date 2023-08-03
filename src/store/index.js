import Vue from "vue";
import Vuex from "vuex";

import mainFunc from "./modules/mainFunc";
import timeStamp from "./modules/timeStamp";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    mainFunc: mainFunc,
    timeStamp: timeStamp,
  },
});
