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
  mounted() {
    axios
      .get("ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then(response => (this.status = response.data[5]))
      .catch(error => (this.status = error));
  }
};
</script>
<style scoped></style>
