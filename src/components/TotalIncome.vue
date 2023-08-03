<template>
  <div>
    <hr />
    <h3>Total Income</h3>
    <p>100 X {{ $store.state.mainFunc.rentNum }} = {{ $store.getters.calculateIncome }}</p>
    <div>
      <button @click="reset" style="margin-bottom: 30px">Reset All</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "TotalIncome",
  methods: {
    ...mapActions({
      reset: "resetAllDataAsync",
    }),
  }
};
</script>
