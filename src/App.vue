<template>
  <div id="app" class="center">
    <h1>- Bicycle Rental Shop -</h1>
    <img style="width: 60px" src="@/assets/bicycle-icon.png" />
    <p>Number of bicycles: {{ $store.state.mainFunc.bicycleNum }}</p>
    <button @click="$store.commit('plusOne')" :disabled="$store.getters.isdisabledPlusFn">
      +1</button>&nbsp;
    <button @click="$store.commit('minusOne')" :disabled="$store.getters.isdisabledMinusFn">
      -1
    </button>
    <p v-if="$store.state.mainFunc.condition" style="color: olive">
      Bikes are available.
    </p>
    <p v-else style="color: darkred">No bike is available.</p>
    <div>
      <hr />
      <h3>Rules</h3>
      <ol style="text-align: left; margin: 0 0 30px 60px">
        <li v-for="(rule, index) in $store.state.mainFunc.rules" :key="index">
          {{ rule }}
        </li>
      </ol>
    </div>
    <TotalIncome />
    <!-- 加上 timestamp -->
    <p>Current Time: {{ $store.state.timeStamp.timestamp }}</p>
  </div>
</template>

<script>
import TotalIncome from "@/components/TotalIncome.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: { TotalIncome },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    ...mapActions({
      getNow: "getNow",
    }),
  },
};
</script>

<style>
.center {
  margin: auto;
  width: 60%;
  margin-top: 50px;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  text-align: center;
}
</style>
