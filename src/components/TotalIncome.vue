<template>
  <div>
    <hr />
    <h3>Total Income</h3>
    <p>100 X {{ parentMsg }} = {{ calculateIncome }}</p>
    <div>
      <button @click="reset()" style="margin-bottom: 30px">Reset All</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TotalIncome",
  props: {
    parentMsg: Number,
  },
  computed: {
    calculateIncome: function () {
      return this.parentMsg * 100;
    },
  },
  methods: {
    reset() {
      this.$emit("resetAll");
    },
  },
};
</script>
