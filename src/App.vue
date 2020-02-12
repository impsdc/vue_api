<template>
  <div id="app">
    <nav class="top-0 right-0 left-0 flex justify-end">
      <router-link
        to="/"
        class="p-3 hover:bg-blue-500 text-blue-700 hover:text-white rounded transition duration-400"
        >Home</router-link
      ><br />
      <router-link
        to="/cat"
        class="p-3 hover:bg-blue-500 text-blue-700 hover:text-white rounded transition duration-400"
        >favorite books</router-link
      >
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped></style>
