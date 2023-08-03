<template>
  <div id="app" class="center">
    <h1>- Bicycle Rental Shop -</h1>
    <img style="width: 60px" src="@/assets/bicycle-icon.png" />
    <p>Number of bicycles: {{ bicycleNum }}</p>
    <button @click="plusOne" :disabled="isdisabledPlusFn">+1</button>&nbsp;
    <button @click="minusOne" :disabled="isdisabledMinusFn">-1</button>
    <p v-if="condition" style="color: olive">Bikes are available.</p>
    <p v-else style="color: darkred">No bike is available.</p>
    <div>
      <hr />
      <h3>Rules</h3>
      <ol style="text-align: left; margin: 0 0 30px 60px">
        <li v-for="(rule, index) in rules" :key="index">{{ rule }}</li>
      </ol>
    </div>
    <TotalIncome v-bind:parentMsg="rentNum" @resetAll="resetAllData()" />
  </div>
</template>

<script>
import TotalIncome from "@/components/TotalIncome.vue";

export default {
  name: "App",
  components: { TotalIncome },
  data() {
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
  computed: {
    isdisabledPlusFn() {
      if (this.bicycleNum == 20) {
        return true;
      } else {
        return false;
      }
    },
    isdisabledMinusFn() {
      if (this.bicycleNum == 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    plusOne: function () {
      this.bicycleNum = this.bicycleNum + 1;
      if (this.bicycleNum == 0) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    },
    minusOne: function () {
      this.bicycleNum = this.bicycleNum - 1;
      this.rentNum += 1;
      if (this.bicycleNum == 0) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    },
    resetAllData: function () {
      this.bicycleNum = 20;
      this.rentNum = 0;
    },
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
