<script>
import AppHeader from "./components/AppHeader.vue";
import LeftSideBar from "./components/LeftSideBar.vue";

// import { store } from "./store.js";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    AppHeader,
    LeftSideBar,
  },
};
</script>

<template>
  <AppHeader></AppHeader>

  <main>
    <div class="d-flex justify-content-between g-3">
      <div class="w-50">
        <LeftSideBar></LeftSideBar>
      </div>

      <router-view></router-view>
    </div>
  </main>
</template>

<style lang="scss">
@import "./scss/partials/variables.scss";

// header,
// main {
//   background-color: $color-background;
// }

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
