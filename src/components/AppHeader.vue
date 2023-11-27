<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <header class="pb-2">
    <nav class="navbar navbar-expand-lg p-3 shadow">
      <div class="container">
        <div class="col-4 d-flex justify-content-center">
          <img class="w-25" src="../assets/images/logo light.png" alt="" />
        </div>

        <div class="col-4 d-flex justify-content-end gap-4">
          <a href=""> About </a>
          <a href=""> Experiences </a>
          <!-- <RouterLink to="/projects" class="nav-link text-white">
          Projects
        </RouterLink> -->
          <a href=""> Projects </a>
          <a href=""> Contact </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
