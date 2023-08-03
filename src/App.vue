<template>
  <div id="app" class="center">
    <h1>- Bicycle Rental Shop -</h1>
    <img style="width: 60px" src="@/assets/bicycle-icon.png" />
    <p>Number of bicycles: {{ $store.state.bicycleNum }}</p>
    <button @click="$store.commit('plusOne')" :disabled="$store.getters.isdisabledPlusFn">
      +1</button>&nbsp;
    <button @click="$store.commit('minusOne')" :disabled="$store.getters.isdisabledMinusFn">
      -1
    </button>
    <p v-if="$store.state.condition" style="color: olive">
      Bikes are available.
    </p>
    <p v-else style="color: darkred">No bike is available.</p>
    <div>
      <hr />
      <h3>Rules</h3>
      <ol style="text-align: left; margin: 0 0 30px 60px">
        <li v-for="(rule, index) in $store.state.rules" :key="index">
          {{ rule }}
        </li>
      </ol>
    </div>
    <TotalIncome v-bind:parentMsg="$store.state.rentNum" @resetAll="$store.commit('resetAllData')" />
  </div>
</template>

<script>
import TotalIncome from "@/components/TotalIncome.vue";

export default {
  name: "App",
  components: { TotalIncome },
  data() {
    return {};
  },
  computed: {},
  methods: {},
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
