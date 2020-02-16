<template>
  <div>
    <h1 class="text-center text-3xl">Listing of quotes</h1>
    <apiQuotes />
  </div>
</template>

<script>
import apiQuotes from "../components/quotes.vue";

export default {
  name: "home",
  components: {
    apiQuotes
  }
};
</script>

<style>
.rounded {
  border-radius: 20px;
}
.card {
  background: #65b9fc;
}
</style>
