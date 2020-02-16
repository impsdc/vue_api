<template>
  <div class="flex justify-center flex-col items-center">
    <span class="text-center text-2xl w-full">{{ this.status }}</span>
    <ul class="w-5/6 py-5">
      <li
        v-for="(index, i) in list"
        :key="i"
        class="px-1 py-3 w-full flex justify-between items-center border-2 border-gray-200 rounded my-1"
      >
        {{ list[i] }}
        <input type="checkbox" v-model="checkedQuotes" :id="list[i]" />
      </li>
    </ul>
  </div>
</template>
<script>
const axios = require("axios").default;

export default {
  name: "apiQuotes",
  data() {
    return {
      status: null,
      list: [],
      checkedQuotes: [],
      checked: true
    };
  },
  created: function() {
    this.load();
  },
  mounted() {
    axios
      .get("http://ron-swanson-quotes.herokuapp.com/v2/quotes/10")
      .then(response => {
        this.list = response.data;
        this.status = "";
      })
      .catch(error => (this.status = error));
  },
  methods: {
    load: function() {
      this.status = "loading the quotes...";
    }
  },
  watch: {
    checkedQuotes: () => {
      console.log(this.id);
    }
  }
};
</script>
<style scoped></style>
