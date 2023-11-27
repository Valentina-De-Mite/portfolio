<script>
import AppHeader from "./components/AppHeader.vue";

// import { store } from "./store.js";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    AppHeader,
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
