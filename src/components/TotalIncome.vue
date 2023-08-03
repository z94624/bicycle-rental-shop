<template>
  <div>
    <hr />
    <h3>Total Income</h3>
    <p>100 X {{ $store.state.rentNum }} = {{ $store.getters.calculateIncome }}</p>
    <div>
      <button @click="$store.commit('resetAllData')" style="margin-bottom: 30px">Reset All</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TotalIncome",
  computed: {},
  methods: {},
};
</script>
