<template>
  <div>
    {{ status }}
  </div>
</template>
<script>
const axios = require("axios").default;

export default {
  name: "apiQuotes",
  data() {
    return {
      status: ""
    };
  },
  created: function() {
    this.load();
  },
  mounted() {
    axios
      .get("http://ron-swanson-quotes.herokuapp.com/v2/quotes/50")
      .then(response => (this.status = response.data))
      .catch(error => (this.status = error));
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
