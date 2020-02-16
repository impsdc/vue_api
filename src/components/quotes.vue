<template>
  <div>
    <span>{{ this.status }}</span>
    <ul>
      <li v-for="(index, i) in list" :key="i">
        {{ list[i] }}
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
      list: []
    };
  },
  created: function() {
    this.load();
  },
  mounted() {
    axios
      .get("http://ron-swanson-quotes.herokuapp.com/v2/quotes/5")
      .then(response => {
        this.list = response.data;
        this.status = "";
      })
      .catch(error => (this.status = error));
    console.log(this.list);
  },
  methods: {
    load: function() {
      this.status = "loading the quotes...";
    },
    lol() {
      console.log(this.quotes);
    }
  }
};
</script>
<style scoped></style>
