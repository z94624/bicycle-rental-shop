// 將 App.vue 的 timestamp 相關拆分出來

const state = {
  timestamp: "",
};

const actions = {
  getNow: (context) => {
    context.commit("getNow");
  },
};

const mutations = {
  getNow: function () {
      const today = new Date();
      const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
    },
};

export default {
  state,
  actions,
  mutations,
};
